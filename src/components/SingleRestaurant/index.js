import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ViewRestaurant from "../ViewRestaurant";

function SingleRestaurant() {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("https://redi-final-restaurants.herokuapp.com/restaurants")
      .then((response) => setRestaurants(response.data.results))
      .catch((error) => error);
  }, []);

  const rest =
    restaurants &&
    restaurants.map((restaurant) => restaurant).find((p) => p.name === id);

  return <div>{rest ? <ViewRestaurant restaurant={rest} /> : "not found"}</div>;
}

export default SingleRestaurant;
