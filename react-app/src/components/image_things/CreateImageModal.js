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
        <h1>Add an Image</h1>
        <form onSubmit={submit}>
          <div>
            <ul className="errors">
              {errors.length > 0 &&
                errors.map((error) => {
                  return <li key={error}>{error}</li>;
                })}
            </ul>
          </div>
          <div>
            <label htmlFor="url">Image Url</label>
            <input
              name="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button onClick={closeModal} type="button">Cancel</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}

export default CreateImageModal;
