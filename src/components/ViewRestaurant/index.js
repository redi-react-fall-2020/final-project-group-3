import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "450px",
    width: "250px",
  },

  imgDiv: {
    minHeight: "200px",
    maxWidth: "100%",
    maxHeight: "200px",
    overflow: "hidden",
  },

  img: {
    maxWidth: "100%",
  },
}));

function ViewRestaurant({ restaurant }) {
  const images = restaurant.photos.map((image) => image.links[0]);
  const openingHours = restaurant.opening_hours.hours;
  const classes = useStyles();
  let history = useHistory();

  const handleClick = () => {
    if (!history) {
      return <div>No country</div>;
    } else {
      history.push("/");
    }
  };

  const { name, cuisine, formatted_address, delivery, pickup } = restaurant;

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={<ArrowBackIcon />}
      />

      <Paper
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className={classes.paper}
      >
        <div className={classes.imgDiv}>
          <img className={classes.img} src={images} alt="Logo" />
        </div>
        <h1 style={{ minHeight: "70px" }}>{name}</h1>

        <p>{cuisine}</p>
        <p>{formatted_address}</p>
        {delivery ? <div>you can order</div> : <div>no delivery</div>}
        {pickup ? <div>you can pickup</div> : <div>no pickup</div>}
        <div>open: {openingHours.open}</div>
        <div>close: {openingHours.close}</div>
      </Paper>
    </div>
  );
}

export default ViewRestaurant;
