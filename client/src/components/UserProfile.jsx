import { Link, } from "react-router-dom"
import "./UserProfile.css"



export default function UserProfile(props) {
  let userLoggedIn = props.currentUser

  const showEditButton = () => {
      if (userLoggedIn && userLoggedIn.id) {
      return (
        <Link to={`/edit-users/${userLoggedIn.id}`} className="edit-user-btn">
          <img src="https://www.pinclipart.com/picdir/big/220-2203636_ykle-wode-svg-png-icon-free-download-edit.png" height={30} width={30} alt={"edit profile icon"} className='edit-icon' />
        </Link>
      )
    }
  }
  return (
    userLoggedIn && userLoggedIn.products?
      <div>
          {showEditButton()}
        <div className="profile-container">
        <div className="user-info-contain">
          <div className="user-info">
            <img className="profile-image" src={userLoggedIn.profile_img ? userLoggedIn.profile_img : "https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png"} height={350} width={350} alt="profile pic" />
            <div className="user-details">
              <h1>{userLoggedIn.name}</h1>
              <p>{userLoggedIn.email}</p>
            </div>
          </div>      
        </div>
        </div>
        <div className="user-product-header">
          <h3>My Products</h3>
        </div>
          <Link to={`/add-product/${props.currentUser.id}`}><button className='new-product-btn'>Add a new product</button></Link>
          <div className="user-product-container">
          {userLoggedIn.products.map((product) => {
            return <div className='user-product-card' key={product.id}>
            <Link to={`/products/${product.id}`}>
            <img src={product.img_url ? product.img_url : "https://gardensonquail.com/wp-content/uploads/2020/12/Image-Coming-Soon-400x400-1.jpg"} alt='product' height="250px" width="250px"/>
            </Link>
            <div className='card-text-container'>
            <h4>{product.name}</h4>
            <h5>${product.price}</h5>
            </div>
            <Link to={`/edit-product/${product.id}`}><button className='profile-edit-product-btn'>Edit Item</button> </Link>
          </div>
          })}
        </div>        
      </div>
      : <div>Loading...</div>

      

  )
}
