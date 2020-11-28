import React from "react";
import { Link } from "react-router-dom";

function Restaurants({ restaurants }) {
  const image = restaurants.photos.map((image) => image.links[0]);
  const { name, cuisine, formatted_address } = restaurants;
  return (
    <div>
      <div>
        <img src={image} width="200px" alt="restaurant" />
      </div>
      <h1>
        <Link to={`singlerestaurant/${name}`}> {name.toUpperCase()}</Link>
      </h1>
      <div>{cuisine.toUpperCase()} RESTAURANT</div>
      <div>{formatted_address}</div>
    </div>
  );
}

export default Restaurants;
