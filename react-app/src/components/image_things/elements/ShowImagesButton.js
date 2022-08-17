import React from "react";
import { Link, useHistory } from "react-router-dom";
import dialPad from "../../../images/dial-pad.png";
import "./showImagesButton.css"

function ShowImagesButton({ listingId }) {
  const history = useHistory();

  const navToAllImages = () => {
    history.push(`/listings/${listingId}/images`);
  };

  return (
    <div className="all-images-button-container">
      <button className="all-images-button show-images-button" onClick={navToAllImages}>
        <img id="dial-pad-icon" src={dialPad}></img>
        <div>Show All Photos</div>
      </button>
    </div>
  );
}

export default ShowImagesButton;
