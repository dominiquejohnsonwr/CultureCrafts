import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUser } from '../services/auth'

export default function Profile() {
  const [user, setUser] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch()
    // eslint-disable-next-line
  }, [])

  async function fetch() {
    let res = await getUser(id)
    setUser(res)
}
  
  return (
    <div>
      
    </div>
  )
}
