import './App.css';
import React from "react";
import {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Restaurant from "./Restaurant.js";
import SearchBanner from "./SearchBanner.js";
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

}));

function App() {
  const classes = useStyles();

  const [data, setData] = useState({ restaurants: [] });
 
  useEffect(() => {

    fetch("https://redi-final-restaurants.herokuapp.com/restaurants").then( r => {

      r.json().then( data => {

        setData({ restaurants: data.results });

      })

    })
    
  },[]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container z-index="10" maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={3}>

          <SearchBanner/>
          <Grid item xl={9} xs={9} sm={9}>
            <Carousel indicators={false} navButtonsAlwaysVisible={true} >
            {
              data.restaurants.map((rest, i) => <Restaurant  key={i} picture={rest.photos[0].links[0]} name={rest.name} type={rest.cuisine} address={rest.formatted_address} />)
            }
            </Carousel>
          </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>


  );
}

export default App;
