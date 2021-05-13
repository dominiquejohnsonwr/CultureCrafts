import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'


export default function Navbar(props) {
  function showNav() {
    if (props.currentUser) {
      return (
        <div className='nav-links'>
          <p className='nav-text'> Welcome, <strong>{props.currentUser && props.currentUser.name}</strong></p> 
          <Link to={`/`}>Home</Link>
          <Link to={`/user-profile`}>My Profile</Link>
          <Link to={'/users'}>UserList</Link>
          <button onClick={props.logout}>Sign out</button>
        </div>
      )
    } else {
      return (
        <div className='links'>
          <Link to='/login'>Sign in</Link>
          <Link to='/signup'>Register</Link>
        </div>
      )
    }
  }
  return (
      <div className='nav'>
        <h2>Culture Crafts</h2>
        {showNav()}
      </div>
  )
}