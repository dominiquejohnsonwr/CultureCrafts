import React from 'react'
import {deleteFavorite} from "../services/auth"

export default function DeleteFavorite(props) {
  const handleClick = async () => {
    const res = await deleteFavorite(props.product_id)
    props.setProductToggle(prevState => !prevState)
    console.log(res)
  }
  
  return <button className='favorites-btn' onClick={handleClick}>Delete from favorites</button>
}