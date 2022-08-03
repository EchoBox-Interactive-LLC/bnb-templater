import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CreateListingForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <main>
      <div>
        <h1>Create Form</h1>
      </div>
    </main>
  )
}


export default CreateListingForm;
