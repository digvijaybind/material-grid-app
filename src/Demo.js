import {Grid, Paper} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  paper: {
    background: "green",
    padding: "20px",
    color: "black",
    backgroundColor: "green",
    textAlign: "center",
  },
});
const Demo = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={12}>
          <Paper className={classes.paper} style={{backgroundColor: "red"}}>
            xs=12
          </Paper>
        </Grid>
        <Grid item lg={6} xs={6} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor: "red"}}>
            {" "}
            xs=6
          </Paper>
        </Grid>
        <Grid item lg={12} xs={6} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor: "green"}}>
            {" "}
            xs=6
          </Paper>
        </Grid>
        <Grid item lg={6} xs={6} sm={12}>
          <Paper className={classes.paper} style={{backgroundColor: "blue"}}>
            {" "}
            xs=6
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Demo;
