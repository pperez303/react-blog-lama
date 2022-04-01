// import React from "react";
import "./topbar.css";
import image from "../../images/Neo.JPG";
import { Link } from "react-router-dom";

const user = false;

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {/* display topImage if user is logged in, else display login/register */}
        {user ? (
            <img className="topImage" src={image} />
          ) : (
           <ul className="topList">
             <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                 REGISTER
                </Link> 
              </li>
          </ul>
          )
        }
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
