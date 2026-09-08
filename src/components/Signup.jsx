import { useState } from "react";
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  
  let users = [];
  // localStorage.setItem("users",JSON.stringify(users));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Account created successfully!");
     setFormData({
   name:"",
   email: "",
   password: "",
   confirmPassword:""

});
    
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <>
      <form className="Signup" onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <h3>Enter your Full Name</h3>

        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />

        <h3>Enter yout Email Address</h3>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />

        <h3>Password</h3>

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />

        <input type="checkbox" />
        <label> Agree Terms and Conditions </label>

        <button id="button" type="submit">
          SIGN UP
        </button>
      </form>
    </>
  );
};

export default Signup;
