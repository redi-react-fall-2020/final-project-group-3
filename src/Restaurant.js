import './App.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      minHeight: "450px"
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
    return <Grid containe item xl={3} xs={3} sm={3}>
        <Paper className={classes.paper}>
           <div className={classes.imgDiv}>
               <img className={classes.img} src={props.picture} alt="Logo" />
               </div> 
            <h1 style={{minHeight: "70px"}}>{props.name}</h1>
            <p>{props.type}</p>
            <p>{props.address}</p>
            </Paper>
    </Grid>
}

export default Restaurant; 