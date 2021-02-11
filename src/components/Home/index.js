import React, { useState, useEffect } from "react";
import axios from "axios";

import Restaurant from "../../Restaurant.js";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SearchBanner from "../../SearchBanner.js";

/* const RestaurantGroup = ({ restaurants }) => {
  return restaurants.map((restaurant, i) => (
    <Restaurant
      key={i}
      picture={restaurant.photos[0].links[0]}
      name={restaurant.name}
      type={restaurant.cuisine}
      address={restaurant.formatted_address}
    />
  ));
}; */


function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

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

    <Container z-index="10" maxWidth="xl">
      
        <div className={classes.root}>
          <Grid container spacing={3}>
           
            <SearchBanner handleChange={handleChange} />
     
             
                {
                  filterRestaurant.map((restaurant, i) => {
                    return <Grid item xl={3} lg={4} xs={6} sm={6}> 
                    <Restaurant
                      key={i}
                      picture={restaurant.photos[0].links[0]}
                      name={restaurant.name}
                      type={restaurant.cuisine}
                      address={restaurant.formatted_address}
                    />
                    </Grid>
                  })
                }
              
          
          </Grid>
        </div>
      </Container>


  );
}

export default Home;
