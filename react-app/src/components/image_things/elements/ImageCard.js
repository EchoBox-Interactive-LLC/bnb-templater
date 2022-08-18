import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeImage } from "../../../store/images";
import "./imageCard.css";

function ImageCard({ image, listing }) {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user)

    const [showDeleteButton, setShowDeleteButton] = useState(false)

    useEffect(() => {
        if (user && listing) {
            if (user.id === listing.user_id) {
                return setShowDeleteButton(true)
            }
        }

    }, [user, listing])
    
    const deleteImage = () => {
        dispatch(removeImage(image.id))
    }
    
    return (
    <div className="single-image-container">
      <img className="standard-image" src={image.url} alt="listing"></img>
      {showDeleteButton && (
        <button onClick={deleteImage} className="delete-image-button">Delete Image</button>
      )}
    </div>
  );
}

export default ImageCard;