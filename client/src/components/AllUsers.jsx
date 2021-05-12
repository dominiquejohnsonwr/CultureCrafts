import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../services/auth'

export default function AllUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const data = await getAllUsers()
    setUsers(data)
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => {
        return <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <h4>{user.name}</h4>
            <img src={user.profile_img ? user.profile_img : "https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png"} alt='user' height="200px"/>
          </Link>
          </div>
      })
      }    
    </div >
  )
}
