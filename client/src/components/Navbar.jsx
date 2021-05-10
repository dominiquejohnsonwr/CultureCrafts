import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <p> Hi, {props.currentUser && props.currentUser.name}!</p>
      Navbar
    </div>
  )
}
