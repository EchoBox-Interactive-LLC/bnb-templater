import React from "react";
import { useDispatch } from "react-redux";
import { removeImage } from "../../../store/images";

function DeleteImageModal({ setShowDeleteImageModal, image }) {
  const dispatch = useDispatch();

  const deleteImage = () => {
    dispatch(removeImage(image.id));
  };

  const cancelDeleteImage = () => {
    setShowDeleteImageModal(false);
  };

  return (
    <div>
      <div id="delete-image-modal-top" className="modal-top">
        <h3 id="delete-image-title" className="modal-title">
          Are you sure you want to delete your image?
        </h3>
        <button
          className="modal-cancel"
          onClick={cancelDeleteImage}
          type="button"
        >
          X
        </button>
      </div>
      <div className="submit-flex">
        <button id="delete-image-button" className="submit-button" onClick={deleteImage}>
          Delete Image
        </button>
      </div>
    </div>
  );
}

export default DeleteImageModal;