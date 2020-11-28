import React from "react";
import { useHistory } from "react-router-dom";

function ViewRestaurant({ restaurant }) {
  const images = restaurant.photos.map((image) => image.links[0]);
  let history = useHistory();

  const handleClick = () => {
    if (!history) {
      return <div>No country</div>;
    } else {
      history.push("/");
    }
  };

  const { name, cuisine, formatted_address } = restaurant;

  return (
    <div>
      <div>
        <button onClick={handleClick}>Back</button>
      </div>
      <div>
        <img src={images} width="200px" alt="restaurant" />
      </div>
      <h1>{name.toUpperCase()}</h1>
      <div>{cuisine.toUpperCase()} RESTAURANT</div>
      <div>{formatted_address}</div>
    </div>
  );
}

export default ViewRestaurant;
