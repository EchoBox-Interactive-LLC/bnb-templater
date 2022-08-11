import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editListing } from "../../../store/listings";

function UpdateListingForm({ listing, setShowUpdateForm }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const updated_at = new Date().toDateString();

  const [title, setTitle] = useState((listing && listing.title) || "");
  const [description, setDescription] = useState(
    (listing && listing.description) || ""
  );
  const [address, setAddress] = useState((listing && listing.address) || "");
  const [city, setCity] = useState((listing && listing.city) || "");
  const [state, setState] = useState((listing && listing.state) || "");
  const [country, setCountry] = useState((listing && listing.country) || "");
  const [price, setPrice] = useState((listing && listing.price) || "");
  const [errors, setErrors] = useState([]);

  if (errors.length > 0) {
    let errorTitles = errors.map((error) => {
      return error.split(":")
    })
    errorTitles = errorTitles.map((error) => {
      return error[0]
    })
    for (const errorTitle of errorTitles) {
      if (errorTitle === "Title") {
        let titleClassAdd = document.getElementById("title-error-box")
        titleClassAdd.classList.add("input-field-error");
      } else if (errorTitle === "Description") {
        let descriptionClassAdd = document.getElementById("description-error-box")
        descriptionClassAdd.classList.add("input-field-error");
      } else if (errorTitle === "Address") {
        let addressClassAdd = document.getElementById("address-error-box")
        addressClassAdd.classList.add("input-field-error");
      } else if (errorTitle === "City") {
        let cityClassAdd = document.getElementById("city-error-box")
        cityClassAdd.classList.add("input-field-error");
      } else if (errorTitle === "State") {
        let stateClassAdd = document.getElementById("state-error-box")
        stateClassAdd.classList.add("input-field-error");
      } else if (errorTitle === "Country") {
        let countryClassAdd = document.getElementById("country-error-box")
        countryClassAdd.classList.add("input-field-error");
      } else if (errorTitle === "Price") {
        let priceClassAdd = document.getElementById("price-error-box")
        priceClassAdd.classList.add("input-field-error");
      }
    }
  }

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to update a listing."]);
      return;
    }

    listing = await dispatch(
      editListing(
        listing.id,
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
      setShowUpdateForm(false);
      history.push(`${listing.id}`);
      return;
    }

    if (Array.isArray(listing)) {
      setErrors(listing);
    }
  };

  const cancelUpdateForm = () => {
    setShowUpdateForm(false);
  };

  return (
    <main>
      <div>
        <form onSubmit={submit}>
          <div className="modal-top">
            <h3 className="modal-title">Update Your Listing</h3>
            <button
              className="modal-cancel"
              onClick={cancelUpdateForm}
              type="button"
            >
              X
            </button>
          </div>
          <div>
            <input id="title-error-box"
              className="input-field"
              placeholder="Title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea id="description-error-box"
              className="input-field"
              rows="4"
              placeholder="Listing Description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input id="address-error-box"
              className="input-field"
              placeholder="Address"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <input id="city-error-box"
              className="input-field"
              placeholder="City"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <input id="state-error-box"
              className="input-field"
              placeholder="State"
              name="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <input id="country-error-box"
              className="input-field"
              placeholder="Country"
              name="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <input id="price-error-box"
              className="input-field"
              placeholder="Price"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
          <button className="submit-button" id="update-listing-button" type="submit">Submit Changes</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UpdateListingForm;
