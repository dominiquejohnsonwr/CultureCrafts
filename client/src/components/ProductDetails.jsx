import React from 'react'
import { getProduct } from "../services/auth"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function ProductDetails(props) {
  let userLoggedIn = props.currentUser
  let { id } = useParams()

  const [product, setProduct] = useState({})


  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line
  }, [])

  const fetchProduct = async () => {
    const res = await getProduct(id);
    setProduct(res);
  };

  const showEditButton = () => {
    console.log(userLoggedIn)
    if (userLoggedIn.id === product.user_id) {
    return (
      <Link to={`/edit-product/${product.id}`}><button>Edit Item</button> </Link>
    )
  }
}


  return (
    <div className="details-container">
      <div className="details-img">
        <img src={product.img_url} height="400px" alt="product"/>
      </div>
      <div className="details-info">
        {product.name}
        <h4>${product.price}</h4>
        <p>{product.description}</p>
        {showEditButton()}
      </div>
    </div>
  )
}
