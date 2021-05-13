import React from 'react'
import { createNewProduct } from "../services/auth"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import "./NewProduct.css"

export default function NewProduct(props) {
  let history = useHistory()
  const [input, setInput] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createNewProduct(input)
    setInput(input)
    props.setProductToggle(prevState => !prevState)
    history.push('/')
  }

  return (
    <div>
      <div className='new-product-title'>
        <h1>New Product</h1>
      </div>
        <form className='new-product-form' onChange={handleChange} onSubmit={handleSubmit}>
          <label>Product Name:</label>
          <input name="name" type="text" value={input.name} />
          <label>Product img URL</label>
          <input name="img_url" type="text" value={input.img_url} />
          <label>Price:</label>
          <input name="price" type="integer" value={input.price} />
          <label>Description:</label>
          <input name="description" type="text" value={input.description} />
          <button className='create-product-submit'>Create Product</button>
        </form>
    </div>
  )
}
