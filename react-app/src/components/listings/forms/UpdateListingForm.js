import React, { useState, useEffect } from "react";
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
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    // Setting error messages
    if (errors.length > 0) {
      let errorMsgs = errors.map((error) => {
        return error.split(":");
      });
      errorMsgs = errorMsgs.map((error) => {
        return error[1];
      });
      setErrorMessages(errorMsgs);

       // Parsing out error titles
      if (errors.length > 0) {
        let errorTitles = errors.map((error) => {
          return error.split(":");
        });
        errorTitles = errorTitles.map((error) => {
          return error[0];
        });

         // Clear all CSS errors styles on each submit
         let titleClassRemove = document.getElementById("title-error-box");
         titleClassRemove.classList.remove("input-field-error");
         let titleLabelClassRemove = document.getElementById(
           "title-label-update-listing"
         );
         titleLabelClassRemove.classList.remove("input-label-error");
         let descriptionClassRemove = document.getElementById(
           "description-error-box"
         );
         descriptionClassRemove.classList.remove("input-field-error");
         let descriptionLabelClassRemove = document.getElementById(
           "description-label-update-listing"
         );
         descriptionLabelClassRemove.classList.remove("input-label-error");
         let addressClassRemove = document.getElementById("address-error-box");
         addressClassRemove.classList.remove("input-field-error");
         let addressLabelClassRemove = document.getElementById(
           "address-label-update-listing"
         );
         addressLabelClassRemove.classList.remove("input-label-error");
         let cityClassRemove = document.getElementById("city-error-box");
         cityClassRemove.classList.remove("input-field-error");
         let cityLabelClassRemove = document.getElementById(
           "city-label-update-listing"
         );
         cityLabelClassRemove.classList.remove("input-label-error");
         let stateClassRemove = document.getElementById("state-error-box");
         stateClassRemove.classList.remove("input-field-error");
         let stateLabelClassRemove = document.getElementById(
           "state-label-update-listing"
         );
         stateLabelClassRemove.classList.remove("input-label-error");
         let countryClassRemove = document.getElementById("country-error-box");
         countryClassRemove.classList.remove("input-field-error");
         let countryLabelClassRemove = document.getElementById(
           "country-label-update-listing"
         );
         countryLabelClassRemove.classList.remove("input-label-error");
         let priceClassRemove = document.getElementById("price-error-box");
         priceClassRemove.classList.remove("input-field-error");
         let priceLabelClassRemove = document.getElementById(
           "price-label-update-listing"
         );
         priceLabelClassRemove.classList.remove("input-label-error");

         // Set and/or Reset error CSS styles
        for (const errorTitle of errorTitles) {
          if (errorTitle === "Title") {
            let titleClassAdd = document.getElementById("title-error-box");
            titleClassAdd.classList.add("input-field-error");
            let titleLabelClassAdd = document.getElementById("title-label-update-listing");
            titleLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Description") {
            let descriptionClassAdd = document.getElementById(
              "description-error-box"
            );
            descriptionClassAdd.classList.add("input-field-error");
            let descriptionLabelClassAdd = document.getElementById("description-label-update-listing");
            descriptionLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Address") {
            let addressClassAdd = document.getElementById("address-error-box");
            addressClassAdd.classList.add("input-field-error");
            let addressLabelClassAdd = document.getElementById("address-label-update-listing");
            addressLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "City") {
            let cityClassAdd = document.getElementById("city-error-box");
            cityClassAdd.classList.add("input-field-error");
            let cityLabelClassAdd = document.getElementById("city-label-update-listing");
            cityLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "State") {
            let stateClassAdd = document.getElementById("state-error-box");
            stateClassAdd.classList.add("input-field-error");
            let stateLabelClassAdd = document.getElementById("state-label-update-listing");
            stateLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Country") {
            let countryClassAdd = document.getElementById("country-error-box");
            countryClassAdd.classList.add("input-field-error");
            let countryLabelClassAdd = document.getElementById("country-label-update-listing");
            countryLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Price") {
            let priceClassAdd = document.getElementById("price-error-box");
            priceClassAdd.classList.add("input-field-error");
            let priceLabelClassAdd = document.getElementById("price-label-update-listing");
            priceLabelClassAdd.classList.add("input-label-error");
          }
        }
      }
    }
  }, [errors]);

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
            <div className="input-label">
              <label id="title-label-update-listing">Title (Required)</label>
            </div>
            <input
              id="title-error-box"
              className="input-field"
              placeholder="Title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
          <div className="input-label">
              <label id="description-label-update-listing">Description (Required)</label>
            </div>
            <textarea
              id="description-error-box"
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
          <div className="input-label">
              <label id="address-label-update-listing">Address (Required)</label>
            </div>
            <input
              id="address-error-box"
              className="input-field"
              placeholder="Address"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
          <div className="input-label">
              <label id="city-label-update-listing">City (Required)</label>
            </div>
            <input
              id="city-error-box"
              className="input-field"
              placeholder="City"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
          <div className="input-label">
              <label id="state-label-update-listing">State (Required)</label>
            </div>
            <input
              id="state-error-box"
              className="input-field"
              placeholder="State"
              name="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
          <div className="input-label">
              <label id="country-label-update-listing">Country (Required)</label>
            </div>
            <input
              id="country-error-box"
              className="input-field"
              placeholder="Country"
              name="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
          <div className="input-label">
              <label id="price-label-update-listing">Price (Required)</label>
            </div>
            <input
              id="price-error-box"
              className="input-field"
              placeholder="Price"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="error-container">
            {errorMessages.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
          </div>
          <div className="submit-flex">
            <button
              className="submit-button"
              id="update-listing-button"
              type="submit"
            >
              Submit Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UpdateListingForm;
