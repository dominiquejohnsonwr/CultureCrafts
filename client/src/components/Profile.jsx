import React from 'react'
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getUser } from '../services/auth'
import "./Profile.css"

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
        <div className="user-product-header">
          <h3>My Products</h3>
        </div>
        <div className="user-product-container">
          {user.products.map((product) => {
            return <div className='user-product-card' key={product.id}>
            <Link to={`/products/${product.id}`}>
            <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} alt='product' height="250px" width="250px"/>
            </Link>
            <div className='card-text-container'>
              <h4>{product.name}</h4>
              <h5>${product.price}</h5>
            </div>
          </div>
          })}
        </div>        
      </div>
      : <div>Loading...</div>
  ) 
}
