import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleRestaurant from "./components/SingleRestaurant";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/singlerestaurant/:id" component={SingleRestaurant} />
      </Switch>
    </div>
  );
}

export default App;
