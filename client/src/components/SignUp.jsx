import { useState } from "react";
import { loginUser, registerUser } from "../services/auth";
import {useHistory} from "react-router-dom"

function SignUp(props) {
  let history = useHistory()
  const [input, setInput] = useState({});
  
    const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(input);
    let res = await loginUser(input)
    props.setCurrentUser(res.payload)
    history.push("/login")
    console.log(res);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Username:</label>
        <input name="name" type="text"/>
        <label>Email:</label>
        <input name="email" type="email" />
        <label>Profile Image Url:</label>
        <input name="profile_img" type="text" placeholder="paste your image url here..." />
        <label>Password:</label>
        <input name="password" type="password" />
        <label>Password Confirmation:</label>
        <input name="password_confirmation" type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;