import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../modal/modal";
import DeleteImageModal from "./DeleteImageModal";
import "./imageCard.css";

function ImageCard({ image, listing }) {

  const user = useSelector((state) => state.session.user);

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showDeleteImageModal, setShowDeleteImageModal] = useState(false);

  useEffect(() => {
    if (user && listing) {
      if (user.id === listing.user_id) {
        return setShowDeleteButton(true);
      }
    }
  }, [user, listing]);


  return (
    <div className="single-image-container">
      <img className="standard-image" src={image.url} alt="listing"></img>
      {showDeleteButton && (
        <button onClick={() => setShowDeleteImageModal(true)} className="delete-image-button">
          Delete Image
        </button>
      )}
      {showDeleteImageModal && user && (
        <Modal onClose={() => setShowDeleteImageModal(false)}>
          <DeleteImageModal
            setShowDeleteImageModal={setShowDeleteImageModal}
            image={image}
          />
        </Modal>
      )}
    </div>
  );
}

export default ImageCard;
