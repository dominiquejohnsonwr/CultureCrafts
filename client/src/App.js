import './App.css';
import { Switch, Route, useHistory } from "react-router-dom"
import {useEffect, useState} from "react"
import Navbar from "./components/Navbar.jsx"
import SignUp from './components/SignUp.jsx';
import Login from "./components/Login.jsx"
import UserProfile from "./components/UserProfile.jsx"
import Profile from "./components/Profile.jsx"

import { verifyUser } from "./services/auth"
import EditProfile from './components/EditProfile';
import Products from './components/Products';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState(null)

  let history = useHistory()

  const logout = async () => {
    await localStorage.clear()
    setCurrentUser(null)
    setUserData(null)
    history.push("/login")
  }

  useEffect(() => {
    verify()
  }, [])
  
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
          <EditProfile userData={userData} />
        </Route>

        <Route path='/user-profile'>
          <UserProfile currentUser={currentUser}/>
        </Route>

        <Route path="/users/:id">
          <Profile />
        </Route>

        <Route exact path='/'>
          <Products />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
