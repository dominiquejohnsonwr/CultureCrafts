import React from 'react'
import { createNewProduct } from "../services/auth"
import { useState } from "react"
import { useHistory } from "react-router-dom"

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
      <h1>New Product</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input name="name" type="text" value={input.name} />
        <label>Product img URL</label>
        <input name="img_url" type="text" value={input.img_url} />
        <label>Price:</label>
        <input name="price" type="integer" value={input.price} />
        <label>Description:</label>
        <input name="description" type="text" value={input.description} />
        <button>Create Product</button>
      </form>
    </div>
  )
}
