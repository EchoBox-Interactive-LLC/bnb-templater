import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/navbar/NavBar";
// import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from "./store/session";
import Listings from "./components/listings/Listings";
import ListingDetails from "./components/listings/ListingDetails";
import ListingImages from "./components/listings/ListingImages";
import MyListings from "./components/listings/MyListings";
import Trips from "./components/bookings/Trips";
import Footer from "./components/footer/Footer";
import FourOFour from "./components/404/FourOFour";
import WishlistPage from "./components/wishlists/WishlistPage";

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
        <Redirect from="/listings/:anything/listings/:listingId" to="/listings/:listingId" />
        <Redirect from="/listings/listings/:listingId" to="/listings/:listingId" />
        <Route path="/listings/:listingId" exact={true}>
          <ListingDetails />
        </Route>
        <Route path="/listings/:listingId/images" exact={true}>
          <ListingImages />
        </Route>
        <Route path="/my-listings" exact={true}>
          <MyListings />
        </Route>
        <Route path="/trips" exact={true}>
          <Trips />
        </Route>
        <Route path="/wishlist" exact={true}>
          <WishlistPage />
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
