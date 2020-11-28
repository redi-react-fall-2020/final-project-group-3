import React, { useState, useEffect } from "react";
import axios from "axios";

import Restaurants from "../Restaurants";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("https://redi-final-restaurants.herokuapp.com/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => error);
  }, []);

  return (
    <div>
      {restaurants.results &&
        restaurants.results.map((restaurant) => (
          <Restaurants key={restaurant.id} restaurants={restaurant} />
        ))}
    </div>
  );
}

export default Home;
