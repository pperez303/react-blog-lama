import React from 'react'
import "./post.css"
import postImage from "../../images/postImage.png"

export default function Post() {
  return (
    <div className="post">
        <img className="postImage" src={postImage} alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Music</span>
                <span className="postCategory">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription">Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Accusamus nostrum odio delectus eius ratione, sunt 
        eligendi labore temporibus! Fuga aliquam soluta corporis nemo explicabo 
        magnam quidem iste vel, iure at.
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Accusamus nostrum odio delectus eius ratione, sunt 
        eligendi labore temporibus! Fuga aliquam soluta corporis nemo explicabo 
        magnam quidem iste vel, iure at
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Accusamus nostrum odio delectus eius ratione, sunt 
        eligendi labore temporibus! Fuga aliquam soluta corporis nemo explicabo 
        magnam quidem iste vel, iure at
        </p>
    </div>
  )
}
