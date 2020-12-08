import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  searchField: {
     // backgroundColor: "white",
      background: "rgba(255, 255, 255, 0.7)",
      width: "300px",
      borderRadius: 30,
      "&:focus": {
        border: "none",
        cssOutlinedInput: {
          '&$cssFocused $notchedOutline': {
            border: `none`,
          }
        },
  }
}
}));

function Search({ handleChange }) {
  const classes = useStyles();
  return (
  
      <InputBase className={classes.searchField} onChange={handleChange} id="outlined-search" placeholder="Find restaurant" type="search" variant="outlined" />

  );
}

export default Search;
