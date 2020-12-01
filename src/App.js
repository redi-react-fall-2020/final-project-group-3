import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Restaurant from "./Restaurant.js";

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
