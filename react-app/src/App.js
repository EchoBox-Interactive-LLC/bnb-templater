import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <Route path="/listings/:listingId" exact={true}>
          <ListingDetails />
        </Route>
      </Switch>
      <Route path="">
        <FourOFour />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
