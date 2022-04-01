import React from 'react'
import singlePostImage from "../../images/singlePostImage.png"
import "./singlepost.css"

export default function singlePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={singlePostImage} alt="" className="singlePostImage" />
            <h1 className="singlePostTitle">single post title
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Pedro</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus ab odio ea blanditiis minus voluptate quae 
                officiis recusandae. Voluptate soluta dolores sequi nostrum 
                tenetur doloremque asperiores debitis molestias aliquid quam.
                Repellendus ab odio ea blanditiis minus voluptate quae 
                officiis recusandae. Voluptate soluta dolores sequi nostrum 
                tenetur doloremque asperiores debitis molestias aliquid quam.
                Repellendus ab odio ea blanditiis minus voluptate quae 
                officiis recusandae. Voluptate soluta dolores sequi nostrum 
                tenetur doloremque asperiores debitis molestias aliquid quam.
            </p>
        </div>
    </div>
  )
}
