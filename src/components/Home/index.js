import React, { useState, useEffect } from "react";
import axios from "axios";

import Restaurants from "../Restaurants";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = () => {
    axios
      .get("https://redi-final-restaurants.herokuapp.com/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => error);
  };
  console.log(restaurants.results);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      {restaurants.results &&
        restaurants.results.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            address={restaurant.formatted_address}
            image={restaurant.photos.map((image) => image.links[0])}
          />
        ))}
    </div>
  );
}

export default Home;
