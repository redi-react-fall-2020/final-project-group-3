import React, { useState, useEffect } from "react";
import axios from "axios";

import Restaurants from "../Restaurants";
import Search from "../Search";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://redi-final-restaurants.herokuapp.com/restaurants")
      .then((response) => {
        setRestaurants(response.data.results);
      })
      .catch((error) => error);
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filterRestaurant = restaurants
    .map((rest) => rest)
    .filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase());
    });

    console.log(restaurants)

  return (
    <div>
      <div>
        <Search handleChange={handleChange} />
      </div>
      <div>
        {filterRestaurant &&
          filterRestaurant.map((restaurant) => (
            <Restaurants key={restaurant.id} restaurants={restaurant} />
          ))}
      </div>
    </div>
  );
}

export default Home;
