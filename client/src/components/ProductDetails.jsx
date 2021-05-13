import React from 'react'
import { getProduct } from "../services/auth"
import { deleteProduct } from "../services/auth"
import { useEffect, useState } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import CreateFavoriteButton from "./CreateFavoriteButton.jsx"
import DeleteFavorite from "./DeleteFavorite.jsx"

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
    userLoggedIn && userLoggedIn.id === product.user_id? 
      <div>
        <Link to={`/edit-product/${product.id}`}>
          <button>Edit Item</button> 
        </Link>
          <button onClick={handleClick}>Delete this item</button>
      </div>
    : <div>Loading...</div>
  }


  const checkIfFavorite = (props) => {
  let found = product.favorites.find(user => {
    if (user.user_id === props.currentUser.id) {
      return true
    } else {
      return false
    }
  })

  if (found) {
    return <DeleteFavorite product_id={product.id} />
  } else {
    return <CreateFavoriteButton product_id={product.id} />
  }
}

  return (
    product.name?
    <div className="details-container">
      <div className="details-img">
          <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} height="400px" alt="product" />
        </div>
        {props.currentUser && product.favorites && checkIfFavorite()}
      <div className="details-info">
        {product.name}
        <h4>${product.price}</h4>
        <p>{product.description}</p>
        {showEditAndDeleteButton()}
      </div>
      <div className="reviews">
          <h3>Reviews</h3>
          <Link to={`/add-review/products/${product.id}`}>
            <button>Add a Review</button>
          </Link>
          {product.reviews.map((review) => {
            return (
              <div key={review.id}>
                <p>Review provided by {review.user.name}</p>
                <p>{review.content}</p>
              </div>
            )
            })}
      </div>
      </div>
      : <div>Loading...</div>
  )
}
