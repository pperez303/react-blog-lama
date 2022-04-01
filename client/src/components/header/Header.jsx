import React from "react"
import headerImage from "../../images/headerImage.png"
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
            
        </div>
        <img className="headerImage" src={headerImage} alt="" />
    </div>
  )
}
