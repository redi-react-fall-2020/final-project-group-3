import './App.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
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
    }
  }));

function Restaurant(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
          
           <div className={classes.imgDiv}>
               <img className={classes.img} src={props.picture} alt="Logo" />
               </div> 
            <h1 style={{minHeight: "70px"}}>{props.name}</h1>
            <p>{props.type}</p>
            <p>{props.address}</p>
           
        </Paper>)
   
}

export default Restaurant; 