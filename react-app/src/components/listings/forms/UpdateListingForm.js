import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editListing } from "../../../store/listings";

function UpdateListingForm({ listing, setShowUpdateForm }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const updated_at = new Date().toDateString();
  const { listingId } = useParams();

  const [title, setTitle] = useState((listing && listing.title) || "");
  const [description, setDescription] = useState((listing && listing.description) || "");
  const [address, setAddress] = useState((listing && listing.address) || "");
  const [city, setCity] = useState((listing && listing.city) || "");
  const [state, setState] = useState((listing && listing.state) || "");
  const [country, setCountry] = useState((listing && listing.country) || "");
  const [price, setPrice] = useState((listing && listing.price) || "");
  const [errors, setErrors] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to update a listing."]);
      return;
    }

    listing = await dispatch(
      editListing(
        listingId,
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
      return;
    }

    if (Array.isArray(listing)) {
      setErrors(listing);
    };
  };

  const cancelUpdateForm = () => {
    setShowUpdateForm(false)
  }

  return (
    <main>
      <div>
        <h1>Update Your Listing</h1>
        <form onSubmit={submit}>
            <div>
              <ul className="errors">
              {errors.length > 0 && errors.map((error) => {
                    return <li key={error}>{error}</li>;
                  })}
              </ul>
            </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              name="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              name="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button onClick={cancelUpdateForm} type="button">Cancel</button>
          <button type="submit">Submit Changes</button>
        </form>
      </div>
    </main>
  );
}

export default UpdateListingForm;
