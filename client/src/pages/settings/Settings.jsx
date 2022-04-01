// import React from 'react'
import SideBar from "../../components/sidebar/Sidebar.jsx"
import settingsImage from "../../images/settingsImage.png"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={settingsImage} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="perez"/>
          <label>Email</label>
          <input type="email" placeholder="perez@gmail.com"/>
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}
