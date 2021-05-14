import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../services/auth'
import './Products.css'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const data = await getAllProducts()
    setProducts(data)
  }

  return (
    <div>
      <div className='product-title'>
        <h3>Welcome to Culture Crafts! Browse products here...</h3>
      </div>
      <div className='products-container'>
        {products.map((product) => {
          return <div className='product-card' key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} alt='product' height="250px" className='product-img' />
              <h4>{product.name}</h4>
            </Link>
            <h5>${product.price}</h5>
          <p className='card-font'>Item posted by <Link to={`/users/${product.user.id}`}>{product.user.name}</Link></p>
          </div>
        })}
      </div>
    </div>
  )
}
