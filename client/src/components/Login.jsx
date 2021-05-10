import { useState } from "react";
import { loginUser } from "../services/auth";

function Login(props) {
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
    let res = await loginUser(input);
    console.log(res);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" type="email" />
        <label>Password:</label>
        <input name="password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
export default Login;