import { useState } from "react";
import { registerUser } from "../services/auth";
function SignUp() {
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
    let res = await registerUser(input);
    console.log(res);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input name="password_confirmation" type="password" />
        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
}
export default SignUp;