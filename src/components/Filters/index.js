import React from "react";

import { makeStyles, Box, Checkbox, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  typography: {
    margin: "auto",
  },
});

function Filters({ setFilter }) {
  const classes = useStyles();

  return (
    <Box display="flex" width="100%" alignItems="center">
      <Box id="pick-up-toggle" display="flex">
        <Checkbox onChange={(e) => setFilter(e, "pickup")} />
        <Typography className={classes.typography}>Pick Up</Typography>
      </Box>
      <Box id="delivery-toggle" display="flex">
        <Checkbox onChange={(e) => setFilter(e, "delivery")} />
        <Typography className={classes.typography}>Delivery</Typography>
      </Box>
      <Box id="open-toggle" display="flex">
        <Checkbox onChange={(e) => setFilter(e, "open_now")} />
        <Typography className={classes.typography}>Open</Typography>
      </Box>
    </Box>
  );
}

export default Filters;
