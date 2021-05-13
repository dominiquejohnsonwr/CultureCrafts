import React from 'react'
import { createFavorite } from "../services/auth"
import "./ProductDetails.css"

export default function CreateFavoriteButton(props) {
  const handleClick = async () => {
    const res = await createFavorite(props.product_id)
    props.setProductToggle(prevState => !prevState)
    console.log(res)
  }
  return <button className='favorites-btn' onClick={handleClick}>Add to favorites</button>
}