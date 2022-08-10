import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeListing } from "../../../store/listings";

function CreateListingForm({ user, setShowCreateListingModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const updated_at = new Date().toDateString();

  if (!user) {
    history.push(`/`);
  }

  const userId = user.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to create a listing."]);
      return;
    }

    let listing = await dispatch(
      makeListing(
        userId,
        title,
        description,
        address,
        city,
        state,
        country,
        price,
        updated_at
      )
    );
    if (listing.id) {
      history.push(`listings/${listing.id}`);
      setShowCreateListingModal(false);
      return;
    }

    if (Array.isArray(listing)) {
      setErrors(listing);
    }
  };

  const cancelNewListing = () => {
    setShowCreateListingModal(false);
  };

  return (
    <main>
      <div>
        <form onSubmit={submit}>
          <div className="modal-top">
            <h3 className="modal-title">Create A Listing</h3>
            <button className="modal-cancel" onClick={cancelNewListing} type="button">
              X
            </button>
          </div>
          <div>
            <input className="input-field"
              placeholder="Title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea className="input-field"
              placeholder="Listing Description"
              rows="4"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input className="input-field"
              placeholder="Address"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <input className="input-field"
              placeholder="City"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <input className="input-field"
              placeholder="State"
              name="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <input className="input-field"
              placeholder="Country"
              name="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <input className="input-field"
              placeholder="Price"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="error-container">
        {errors.map((error, ind) => (
          <div className="errors" key={ind}>{error}</div>
        ))}
      </div>
      <div className="submit-flex">
          <button className="submit-button" id="create-listing-button" type="submit">Submit</button>
      </div>
        </form>
      </div>
    </main>
  );
}

export default CreateListingForm;
