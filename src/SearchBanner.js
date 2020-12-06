import './App.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import bannerPhoto from "./banner.jpg";
import Search from "./components/Search";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        backgroundImage: `url(${bannerPhoto})`,
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    searchField: {
       // backgroundColor: "white",
        background: "rgba(255, 255, 255, 0.6)",
        width: "250px"
    }

}));

function SearchBanner(props) {
    const classes = useStyles();
    return <Grid item lg={12} xs={3} sm={6}>

        <Paper className={classes.paper}>
        <Search handleChange={props.handleChange} />
        </Paper>
    </Grid>
}

export default SearchBanner; 