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
      <img
        className="standard-image"
        src={image.url}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
        }}
        alt="listing"
      ></img>
      {showDeleteButton && (
        <button
          onClick={() => setShowDeleteImageModal(true)}
          className="delete-image-button"
        >
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
