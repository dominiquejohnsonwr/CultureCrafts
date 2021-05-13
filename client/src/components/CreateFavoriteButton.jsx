import React from 'react'
import {createFavorite} from "../services/auth"

export default function CreateFavoriteButton(props) {
  const handleClick = async () => {
    const res = await createFavorite(props.product_id)
    console.log(res)
  }
  return <button onClick={handleClick}>Add to favorites</button>
}