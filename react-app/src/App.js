import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/navbar/NavBar";
// import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from "./store/session";
import Listings from "./components/listings/Listings";
import ListingDetails from "./components/listings/ListingDetails";
import Footer from "./components/footer/Footer";
import FourOFour from "./components/404/FourOFour";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Listings />
        </Route>
        <Redirect from="/listings/listings/:listingId" to="/listings/:listingId" />
        <Route path="/listings/:listingId" exact={true}>
          <ListingDetails />
        </Route>
        <Route path="">
          <FourOFour />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
