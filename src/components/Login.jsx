import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Login = () => {
const [formData,setFormData]=useState({
  email:"",
  password:""

})
const navigate = useNavigate();
console.log(formData);
const handleChange =(event)=>{
  setFormData((prev)=>({...prev,[event.target.name]:event.target.value}))
}

  const handleSubmit = (event) => {
    event.preventDefault();
// localStorage.getItem("email", formData.email);
let users=localStorage.getItem("users");
users=JSON.parse(users);
const sucessfull=users.find(
  (user)=>
    user.email ===formData.email &&
    user.password === formData.password
);
  
  if (sucessfull) {
    alert("login sucessfull");
    navigate("/welcome");
  }
  else(
    alert("no user exist")
  )
  setFormData({
  email: "",
  password: ""
});
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
          
          <Link to="/signup" className="cr">Create An Account</Link>

        </form>
      </div>
    </div>
  );
};

export default Login;