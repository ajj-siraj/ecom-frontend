import { createContext, useEffect, useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CategoryPage from "./CategoryPage";

import { StateProvider } from "../Context";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_baseUrl}/products`, {headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }})
  //     // .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);


  return (
    <StateProvider>
      <div className="main-container-div">
        <Header />

        <Switch>
          <Route path="/category/:catName" component={CategoryPage} />
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </StateProvider>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default Main;
