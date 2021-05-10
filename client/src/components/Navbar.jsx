import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  if (props.currentUser) {
    return (
      <div>
        <p> Welcome, {props.currentUser && props.currentUser.name}!</p>
      Navbar
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Sign in</Link>
        <Link to='/signup'>Register</Link>
      </div>
    )
  }
}