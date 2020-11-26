import React from "react";

function Restaurants({ name, address, cuisine, image }) {
  console.log("image", image);
  return (
    <div>
      <div>
        <div>
          <img src={image} width="200px" alt="restaurant" />
        </div>
        <h1>{name.toUpperCase()} </h1>
        <div>{cuisine.toUpperCase()} RESTAURANT</div>
        <div>{address}</div>
      </div>
    </div>
  );
}

export default Restaurants;
