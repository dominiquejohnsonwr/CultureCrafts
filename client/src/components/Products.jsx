import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../services/auth'

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
      <h1>Products</h1>
      {products.map((product) => {
        return <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h4>{product.name}</h4>
            <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} alt='product' height="200px"/>
            <h5>${product.price}</h5>
          </Link>
          <p>Item posted by <Link to={`/users/${product.user.id}`}>{product.user.name}</Link></p>

          </div>
      })}
    </div>
  )
}
