import './App.css';
import { Switch, Route, useHistory } from "react-router-dom"
import {useEffect, useState} from "react"
import Navbar from "./components/Navbar.jsx"
import SignUp from './components/SignUp.jsx';
import Login from "./components/Login.jsx"
import UserProfile from "./components/UserProfile.jsx"
import Profile from "./components/Profile.jsx"
import NewProduct from "./components/NewProduct.jsx"
import ProductDetails from "./components/ProductDetails.jsx"
import EditProduct from "./components/EditProduct.jsx"
import AllUsers from "./components/AllUsers.jsx"

import { verifyUser } from "./services/auth"
import EditProfile from './components/EditProfile';
import Products from './components/Products';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [productToggle, setProductToggle] = useState(false)

  let history = useHistory()

  const logout = async () => {
    await localStorage.clear()
    setCurrentUser(null)
    setUserData(null)
    history.push("/login")
  }

  useEffect(() => {
    verify()
  }, [productToggle])
  
  const verify = async () => {
    let user = await verifyUser()
    setCurrentUser(user)
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout} userData={userData} />
      <Switch>
        <Route path='/signup'>
          <SignUp setCurrentUser={setCurrentUser} />
        </Route>

        <Route path='/login'>
          <Login verify={verify} />
        </Route>

        <Route path='/edit-users/:id'>
          <EditProfile userData={userData} setCurrentUser={setCurrentUser} setProductToggle={setProductToggle} />
        </Route>

        <Route path='/user-profile'>
          <UserProfile currentUser={currentUser} />
        </Route>

        <Route path="/users/:id">
          <Profile />
        </Route>

        <Route exact path='/'>
          <Products />
        </Route>

        <Route path='/add-product'>
          <NewProduct />
        </Route>

        <Route path='/products/:id'>
          <ProductDetails />
        </Route>

        <Route path='/edit-product/:id'>
          <EditProduct currentUser={currentUser} setProductToggle={setProductToggle} />
        </Route>

        <Route path='/users'>
          <AllUsers />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
