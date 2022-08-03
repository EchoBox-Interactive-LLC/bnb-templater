import React from "react";
import CreateListingForm from "./forms/CreateListingForm";

function CreateListing() {
  return (
    <main>
      <div className="create-form-container">
          <h1>
            Create A Listing
          </h1>
          <CreateListingForm />
      </div>
    </main>
  );
}

export default CreateListing;
