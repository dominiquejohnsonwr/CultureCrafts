import { useParams, Link, } from "react-router-dom"



export default function UserProfile(props) {
  let { id } = useParams()
  let userLoggedIn = props.currentUser

  const showEditButton = () => {
      if (userLoggedIn && userLoggedIn.id) {
      return (
        <Link to={`/edit-users/${userLoggedIn.id}`} className="edit-user-btn">
          <img src="https://www.pinclipart.com/picdir/big/220-2203636_ykle-wode-svg-png-icon-free-download-edit.png" height={30} width={30} alt={"edit profile icon"} />
        </Link>
      )
    }
  }
  return (
      userLoggedIn? 
      <div>
        <div className="profile-container">
        {showEditButton()}
        <h3>User Profile</h3>
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

        <div className="products-container">
          <h3>My Products</h3>
          <Link to={`/add-product/${props.currentUser.id}`}><button>Add a new product</button></Link>
          {userLoggedIn.products.map((product) => {
          return <div>
          {/* <Link to='/products/:id'> */}
            <h4>{product.name}</h4>
          <img src={product.img_url} alt='product' height="200px"/>
            <h5>${product.price}</h5>
            <p>{product.description}</p>
          {/* </Link> */}
          </div>
      })}
        </div>        
      </div>
      : <div>Loading...</div>

      

  )
}
