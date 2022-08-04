import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeListing } from "../../../store/listings";

function CreateListingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const updated_at = new Date().toDateString();

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
      history.push(`listing/${listing.id}`);
      return;
    }

    if (Array.isArray(listing)) {
      setErrors(listing);
    };
  };

  return (
    <main>
      <div>
        <h1>Create A Listing</h1>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default CreateListingForm;
