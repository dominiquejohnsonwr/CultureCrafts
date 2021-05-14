import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'


export default function Navbar(props) {
  function showNav() {
    if (props.currentUser) {
      return (
        <div className='nav-links'>
          <p className='nav-text'> Welcome, <strong>{props.currentUser && props.currentUser.name}</strong></p> 
          <Link to={`/`} className='navbar-link'>Home</Link>
          <Link to={`/user-profile`} className='navbar-link'>My Profile</Link>
          <Link to={'/users'} className='navbar-link'>UserList</Link>
          <button className='sign-out-button' onClick={props.logout}>Sign out</button>
        </div>
      )
    } else {
      return (
        <div className='links'>
          <Link to='/login' className='navbar-link'>Sign in</Link>
          <Link to='/signup' className='navbar-link'>Register</Link>
        </div>
      )
    }
  }
  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='/'>
          <img src="https://freepikpsd.com/wp-content/uploads/2019/10/cc-logo-png-4-Transparent-Images.png" className='logo' alt="logo" />
        </Link>
      </div>
        {showNav()}
      </div>
  )
}