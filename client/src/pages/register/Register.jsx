// import React from 'react'
import {Link} from 'react-router-dom'
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input className="registerInput" type="text" placeholder="Enter username...." />
            
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter Your email...." />
            <label>Password</label>
            <input className="passwordInput" type="password" placeholder="Enter  password...." />
            <button className="registerButton">Register</button>
            
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
    </div>
  )
}
