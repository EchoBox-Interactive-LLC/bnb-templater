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
      <button className="all-images-button" onClick={navToAllImages}>
        <img id="dial-pad-icon" src={dialPad}></img>
        <div>Show All Photos</div>
      </button>
      <Link to={`/listings/${listingId}/images`}></Link>
    </div>
  );
}

export default ShowImagesButton;
