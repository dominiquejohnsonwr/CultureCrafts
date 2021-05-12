import React from 'react'
import { getProduct } from "../services/auth"
import { deleteProduct } from "../services/auth"
import { useEffect, useState } from "react"
import { useParams, Link, useHistory } from "react-router-dom"

export default function ProductDetails(props) {
  let userLoggedIn = props.currentUser
  let { id } = useParams()
  let history = useHistory()

  const [product, setProduct] = useState({})


  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line
  }, [])

  const fetchProduct = async () => {
    const res = await getProduct(id);
    setProduct(res);
  };

  async function handleClick(e) {
    e.preventDefault()
    let item = product.id
    await deleteProduct(item)
    props.setProductToggle(prevState => !prevState)
    history.push('/user-profile')
  }

  const showEditAndDeleteButton = () => {
    if (userLoggedIn.id === product.user_id) {
      return (
      <div>
        <Link to={`/edit-product/${product.id}`}>
          <button>Edit Item</button> 
        </Link>
          <button onClick={handleClick}>Delete this item</button>
      </div>
    )
  }
}


  return (
    product.reviews?
    <div className="details-container">
      <div className="details-img">
        <img src={product.img_url} height="400px" alt="product"/>
      </div>
      <div className="details-info">
        {product.name}
        <h4>${product.price}</h4>
        <p>{product.description}</p>
        {showEditAndDeleteButton()}
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
          {product.reviews.map((review) => {
              <p>{review.content}</p>
        })}
      </div>
      </div>
      : <div>Coming Soon</div>
  )
}
