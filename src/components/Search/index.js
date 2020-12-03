import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  searchField: {
     // backgroundColor: "white",
      background: "rgba(255, 255, 255, 0.7)",
      width: "300px",
      borderRadius: 30
  }
}));

function Search({ handleChange }) {
  const classes = useStyles();
  return (
  
      <TextField className={classes.searchField} onChange={handleChange} id="outlined-search" label="Find restaurant" type="search" variant="outlined" />

  );
}

export default Search;
