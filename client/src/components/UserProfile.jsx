import { useEffect, useState } from "react"
import { getUser } from "../services/auth"
import { useParams, Link, } from "react-router-dom"



export default function UserProfile(props) {
  let [user, setUser] = useState({})
  let { id } = useParams()
  let userLoggedIn = props.currentUser

  const showEditButton = () => {
    if (userLoggedIn && userLoggedIn.id === id) {
      return (
        <Link to={`/edit-users/${id}`} className="user-btn">
          <img src="https://www.pinclipart.com/picdir/big/220-2203636_ykle-wode-svg-png-icon-free-download-edit.png" height={30} width={30} alt={"edit profile icon"} />
        </Link>
      )
    }
  }
    return (
      <div className="profile-container">
        {showEditButton()}
        <h3>User Profile</h3>
        <div className="user-info-contain">
          <div className="user-info">
            <img className="profile-image" src={props.currentUser.profile_img ? props.currentUser.profile_img : "https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png"} height={350} width={350} alt="profile pic" />
            <div className="user-details">
              <h1>{props.currentUser.name}</h1>
              <p>{props.currentUser.email}</p>
            </div>
          </div>
      
        </div>
      </div>
  )
}
