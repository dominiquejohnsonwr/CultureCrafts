import React from 'react'
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getUser } from '../services/auth'

export default function Profile(props) {
  const [user, setUser] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch()
    // eslint-disable-next-line
  }, [])

  async function fetch() {
    let res = await getUser(id)
    console.log(res)
    setUser(res)
}
  
  return (
    user.name && user.products ?
    <div>
    <div className="profile-container">
        <div className="user-info-contain">
          <div className="user-info">
            <img className="profile-image" src={user.profile_img ? user.profile_img : "https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png"} height={350} width={350} alt="profile pic" />
            <div className="user-details">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>      
        </div>
        </div>
        <div className="products-container">
          <h3>My Products</h3>
          {user.products.map((product) => {
          return <div>
            <Link to={`/products/${product.id}`}>
            <h4>{product.name}</h4>
          <img src={product.img_url} alt='product' height="200px"/>
            <h5>${product.price}</h5>
            <p>{product.description}</p>
            </Link>
          </div>
          })}
        </div>        
      </div>
      : <div>Loading...</div>
  ) 
}
