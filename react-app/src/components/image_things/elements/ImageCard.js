import React from "react";
import "./imageCard.css";

function ImageCard({ image }) {
  return (
    <div className="single-image-container">
      <img className="standard-image" src={image.url} alt="listing"></img>
      <button className="delete-image-button">Delete Image</button>
    </div>
  );
}

export default ImageCard;