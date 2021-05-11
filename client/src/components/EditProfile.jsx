import { useState, useEffect } from "react";
import { updateUser } from "../services/auth"
import { getUser } from "../services/auth"
import { useParams, useHistory } from "react-router-dom"

export default function EditProfile(props) {
  let { id } = useParams()
  let [user, setUser] = useState({})

  useEffect(() => {
    getUserData()
    // eslint-disable-next-line
  }, [id])

  async function getUserData() {
    let data = await getUser(id)
    setUser(data)
  }

  const defaultInput = {
    name: user.name,
    email: user.email,
    profile_img: user.profile_img,
  }

  const history = useHistory()
  const [input, setInput] = useState(defaultInput)

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await updateUser(id, input);
    props.setCurrentUser(result)
    props.setProductToggle(prevState => !prevState)
    setInput(input)
    history.push(`/user-profile`)
  }


  return (
    <div>
      <h3>Edit Profile</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Username:</label>
        <input name="name" type="text" placeholder="Enter username" defaultValue={user.name}/>
        <label>Email:</label>
        <input name="email" type="email" placeholder="Enter your email address" defaultValue={user.email} />
        <label>Profile Image Url:</label>
        <input name="profile_img" type="text" placeholder="paste your image url here..." defaultValue={user.profile_img} />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  )
}
