import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { BrowseBusinesses } from "./components/BrowseBusinesses";
import { BusinessPage } from "./components/BusinessPage";
import { AddBusinessForm } from "./components/AddBusinessForm";
import { EditBusinessFrom } from "./components/EditBusinessForm";
import { AddReviewPage } from "./components/AddReviewPage";
import { EditReview } from "./components/EditReview";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

//just make a different navbar composnent for each url if needed to keep it simple
//if path === specific url, render nav bar one way, else render a different way
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <BrowseBusinesses />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/businesses">
            <BrowseBusinesses />
          </Route>
          <Route exact path="/businesses/:businessId">
            <BusinessPage />
          </Route>
          <Route exact path="/businesses/:businessId/edit">
            <EditBusinessFrom />
          </Route>
          <Route exact path="/addbusinesses/new">
            <AddBusinessForm />
          </Route>
          <Route exact path="/businesses/:businessId/reviews/new">
            <AddReviewPage />
          </Route>
          <Route exact path="/businesses/:businessId/reviews/:reviewId/edit">
            <EditReview />
          </Route>
        </Switch>
      )}
    </>
  );
}


export default App;
