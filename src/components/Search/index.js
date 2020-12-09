import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  searchField: {
    background: "rgba(255, 255, 255, 0.7)",
    width: "350px",
    height: "45px",
    paddingLeft: "20px",
    borderRadius: 30,
    "&:focus": {
      border: "none",
      cssOutlinedInput: {
        "&$cssFocused $notchedOutline": {
          border: `none`,
        },
      },
    },
  },
}));

function Search({ handleChange }) {
  <FontAwesomeIcon icon={faCoffee} />;
  const classes = useStyles();
  return (
    <InputBase
      className={classes.searchField}
      onChange={handleChange}
      id="outlined-search"
      placeholder="Find restaurant"
      type="search"
      variant="outlined"
    />
  );
}

export default Search;
