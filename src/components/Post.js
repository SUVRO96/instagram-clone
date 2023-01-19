import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* header-> avatar + username */}
      <div className="post_header">
        <Avatar
          className="post_avatar"
          src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        />
        <h5>{username}</h5>
        <i className="fa-solid fa-ellipsis" style={{ marginLeft: "auto" }}></i>
      </div>

      {/* image */}
      <img className="post_image" src={imageUrl} alt="user" />

      {/* coomments and likes */}
      <div className="post_menu">
        <span>
          <i className="fa-regular fa-heart fa-lg"></i>
          <i className="fa-regular fa-comment fa-lg fa-flip-horizontal"></i>
          <i className="fa-regular fa-paper-plane fa-lg"></i>
        </span>
        <span>
          <i className="fa-regular fa-bookmark fa-lg"></i>
        </span>
      </div>
      {/* likes */}
      <div className="post_text">
        <p>72 likes</p>
      </div>
      {/* username + caption */}
      <h4 className="post_text">
        <strong>{username}: </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
