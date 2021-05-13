import { useState } from "react";
import { loginUser } from "../services/auth";
import { useHistory } from "react-router-dom"
import './Login.css'


function Login(props) {
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
    await loginUser(input);
    props.verify()
    history.push("/")
  };
  return (
    <div className='login-title'>
      <h1>Login</h1>
      <div className='form-container'>
        <form className='log-in-form' onChange={handleChange} onSubmit={handleSubmit}>
          <label>Email:</label>
          <input name="email" type="email" />
          <label>Password:</label>
          <input name="password" type="password" />
          <button className='login-submit' type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
export default Login;