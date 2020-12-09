import React, { useState, useEffect } from "react";
import axios from "axios";

import Restaurant from "../../Restaurant.js";
import Filters from "../Filters";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SearchBanner from "../../SearchBanner.js";

function Home() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filters, setFilters] = useState({});

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
        setAllRestaurants(response.data.results);
        setFilteredRestaurants(response.data.results);
      })
      .catch((error) => error);
  }, []);

  const handleSearchBarChange = (event) =>
    setFilters({ ...filters, name: event.target.value.toLowerCase() });

  const setFilter = (event, filterKey) =>
    setFilters({ ...filters, [filterKey]: event.target.checked });

  useEffect(() => {
    setFilteredRestaurants(
      allRestaurants
        // name filtering
        .filter((rest) => {
          if (filters.name)
            return rest.name.toLowerCase().includes(filters.name);
          else return true;
        })
        // pickup filtering
        .filter((rest) => {
          if (filters.pickup) return rest.pickup;
          else return true;
        })
        // delivery filtering
        .filter((rest) => {
          if (filters.delivery) return rest.delivery;
          else return true;
        })
        // checks open restaurants
        .filter((rest) => {
          if (filters.open) return rest.opening_hours.open_now;
          else return true;
        })
    );
  }, [filters, allRestaurants]);

  return (
    <>
      <Container z-index="10" maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <SearchBanner handleChange={handleSearchBarChange} />
            <Filters setFilter={setFilter} />

            {filteredRestaurants.map((restaurant) => {
              return (
                <Grid item xl={3} lg={3} xs={6} sm={3} key={restaurant.id}>
                  <Restaurant
                    picture={restaurant.photos[0].links[0]}
                    name={restaurant.name}
                    type={restaurant.cuisine}
                    address={restaurant.formatted_address}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Home;
