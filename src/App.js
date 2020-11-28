import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import SingleRestaurant from "./components/SingleRestaurant";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/header" component={Header} />
        <Route path="/singlerestaurant/:id" component={SingleRestaurant} />
      </Switch>
    </div>
  );
}

export default App;
