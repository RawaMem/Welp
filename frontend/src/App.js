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
  console.log('App component running')
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  console.log('app component is about to dispatch the restoreUser action, this will cause all the reducers to run so we shoul dsee the business reducer running as well')

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
