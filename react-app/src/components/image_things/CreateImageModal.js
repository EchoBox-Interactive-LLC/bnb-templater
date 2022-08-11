import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeImage } from "../../store/images";


function CreateImageModal({ setShowCreateImageModal }) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const { listingId } = useParams();

  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);

  if (errors.length > 0) {
    let errorTitles = errors.map((error) => {
      return error.split(":")
    })
    errorTitles = errorTitles.map((error) => {
      return error[0]
    })
    for (const errorTitle of errorTitles) {
      if (errorTitle === "Url") {
        let urlClassAdd = document.getElementById("url-error-box")
        urlClassAdd.classList.add("input-field-error");
      }
    }
  }

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to add an image."]);
      return;
    }

    let image = await dispatch(
      makeImage(userId, listingId, url)
    );
    if (image.id) {
      setShowCreateImageModal(false);
      return;
    }

    if (Array.isArray(image)) {
      setErrors(image);
    }
  };

  const closeModal = () => {
    setShowCreateImageModal(false);
  }

  return (
    <main>
      <div>
        <form onSubmit={submit}>
        <div className="modal-top">
            <h3 className="modal-title">Add an Image</h3>
            <button
              className="modal-cancel"
              onClick={closeModal}
              type="button"
            >
              X
            </button>
          </div>
          <div>
            <input id="url-error-box" className="input-field"
              placeholder="Image Url"
              name="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="error-container">
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
          </div>
          <div className="submit-flex">
          <button className="submit-button" id="add-image-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default CreateImageModal;
