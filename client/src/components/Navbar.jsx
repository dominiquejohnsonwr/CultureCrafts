import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  // let id = props.userData
  function showNav() {
    if (props.currentUser) {
      return (
        <div className='nav-links'>
          <p> Welcome, {props.currentUser && props.currentUser.name}!</p>
          <Link to={`/user-profile`}>My Profile</Link>
          <Link to={`/users/${props.currentUser.id}/products`}>My Products</Link>
          <button onClick={props.logout}>Sign out</button>
        </div>
      )
    } else {
      return (
        <div className='nav-links'>
          <Link to='/login'>Sign in</Link>
          <Link to='/signup'>Register</Link>
        </div>
      )
    }
  }
  return (
    <div className='nav'>
      <Link to='/'>
        <h3><img className='logo' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/cc-512.png" height="80px" alt="logo" /> Culture Crafts</h3>
      </Link>
        {showNav()}
    </div>
  )
}