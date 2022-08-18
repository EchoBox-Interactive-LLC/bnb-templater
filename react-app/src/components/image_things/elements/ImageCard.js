import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./imageCard.css";

function ImageCard({ image, listing }) {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user)

    useEffect(() => {
        if (user && listing) {
            if (user.id === listing.user_id) {
                return setShowDeleteButton(true)
            }
        }

    }, [user])

    const [showDeleteButton, setShowDeleteButton] = useState(false)
    
    return (
    <div className="single-image-container">
      <img className="standard-image" src={image.url} alt="listing"></img>
      {showDeleteButton && (
        <button className="delete-image-button">Delete Image</button>
      )}
    </div>
  );
}

export default ImageCard;