import { useState } from "react";
import "./Login.css";

const Login = () => {
const [formData,setFormData]=useState({
  email:"",
  password:""

})
console.log(formData);
const handleChange =(event)=>{
  setFormData((prev)=>({...prev,[event.target.name]:event.target.value}))
}
  const handleSubmit = (event) => {
    event.preventDefault();
//  localStorage.setItem.email;
//  localStorage.setItem.password;
localStorage.setItem("email", formData.email);
localStorage.setItem("password", formData.password);
  };

  return (
    <div className="login-page">
      <div className="box">
        <form className="login" onSubmit={handleSubmit}> 

          <h1>Login Page</h1>

          <h3>Enter your Mail id</h3>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <h3>Password</h3>

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button id="button" type="submit">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;