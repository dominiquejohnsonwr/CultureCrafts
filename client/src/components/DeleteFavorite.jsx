import React from 'react'
import {deleteFavorite} from "../services/auth"

export default function DeleteFavorite(props) {
  const handleClick = async () => {
    const res = await deleteFavorite(props.products_id)
    console.log(res)
  }
  
  return <button onClick={handleClick}>Delete from favorites</button>
}