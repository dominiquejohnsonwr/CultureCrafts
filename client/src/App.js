import './App.css';
import { Route, Switch } from "react-router-dom"
import {useEffect, useState} from "react"
import Navbar from "./components/Navbar.jsx"
import SignUp from './components/SignUp';
import Login from "./components/Login"

import { verifyUser } from "./services/auth"
import EditProfile from './components/EditProfile';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    verify()
  }, [])

  const verify = async () => {
    let user = await verifyUser()
    setCurrentUser(user)
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route path='/signup'>
          <SignUp setCurrentUser={setCurrentUser} />
        </Route>

        <Route path='/login'>
          <Login verify={verify} />
        </Route>

        <Route path='/edit-users/:id'>
          <EditProfile />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
