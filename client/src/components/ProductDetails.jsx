import React from 'react'
import { getProduct } from "../services/auth"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import CreateFavoriteButton from "./CreateFavoriteButton.jsx"
import DeleteFavorite from "./DeleteFavorite.jsx"
import "./ProductDetails.css"

export default function ProductDetails(props) {
  let userLoggedIn = props.currentUser
  let { id } = useParams()

  const [product, setProduct] = useState({})
  const [found, setFound] = useState(false)


  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (userLoggedIn.email) checkIfFavorite()
    // eslint-disable-next-line
  }, [props.currentUser, product, props.productToggle])

  const fetchProduct = async () => {
    const res = await getProduct(id);
    setProduct(res);
  };

  const showEditAndDeleteButton = () => {
    return (
    userLoggedIn && userLoggedIn.id === product.user_id? 
      <div>
        <Link to={`/edit-product/${product.id}`}>
          <button className='update-btn'>Edit Item</button> 
        </Link>
      </div>
    : <div>Loading...</div>
    )
  }


  const checkIfFavorite = (props) => {
    let foundFavorite = userLoggedIn.favorites.find(p => {
      if (p.product_id === product.id) {
        return true
      } else {
        return false
      }
    })
    setFound(foundFavorite)
  }
  const renderButton = () => {
    if (found) {
      return <DeleteFavorite product_id={product.id} setProductToggle={props.setProductToggle} />
    } else {
      return <CreateFavoriteButton product_id={product.id} setProductToggle={props.setProductToggle} />
    }
  }
  
  return (
    product.name?
    <div className="details-container">
        <div className="details-img">
          <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} height="500px" alt="product" />
        </div>
        {renderButton()}
      <div className="details-info">
        <h3>{product.name}</h3>
        <h5>${product.price}</h5>
        <p>{product.description}</p>
        {showEditAndDeleteButton()}
      </div>
      <div className="reviews">
          <h3>Reviews</h3>
          <Link to={`/add-review/products/${product.id}`}>
            <button className='profile-edit-product-btn'>Add a Review</button>
          </Link>
          {product.reviews.map((review) => {
            return (
              <div className='review-details' key={review.id}>
              <p className='review-content'>{review.content}</p>
              <p className='review-user'>Review provided by {review.user.name}</p>
              </div>
            )
            })}
      </div>
      </div>
      : <div>Loading...</div>
  )
}
