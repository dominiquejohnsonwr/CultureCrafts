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
    console.log(data)
  }

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h4>{product.name}</h4>
            <img src={product.img_url} alt='product' height="200px"/>
            <h5>${product.price}</h5>
          </Link>
          <p>Item posted by <Link to={`/users/${product.user.id}`}>{product.user.name}</Link></p>

          </div>
      })}
    </div>
  )
}
