import React from 'react'
import { createNewReview } from '../services/auth'
import { useHistory, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getProduct } from "../services/auth"

export default function NewReview(props) {
  let history = useHistory()
  const [input, setInput] = useState({})
  const [product, setProduct] = useState({})
  let { id } = useParams()

  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line
  }, [])

  const fetchProduct = async () => {
    const res = await getProduct(id);
    setProduct(res);
  };


  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createNewReview(id, input)
    setInput(input)
    props.setProductToggle(prevState => !prevState)
    history.push(`/products/${product.id}`)
  }
  
  
  return (
    <div>
      <div className="product-details">
        {product.name}
        <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} alt="product" />
        {product.description}
      </div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Review this product:</label>
        <input name="content" type="textarea" defaultValue={input.content} />
        <button>Submit review</button>
      </form>
    </div>
  )
}
