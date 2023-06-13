import {Divider, Grid} from "@mui/material";
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  paper: {
    background: "green",
    padding: "20px",
    color: "black",
    backgroundColor: "green",
    textAlign: "center",
  },
});
const Demo1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={12} container spacing={2} direction="column">
        <Grid item xs={2} lg={4} sm={6}>
          Welcome ,Anthony
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          logout
        </Grid>
        <Grid item cxs={12}>
          <Divider />
        </Grid>
        <Grid xs={12} container spacing={2}>
          <Grid item xs={6} lg={6} sm={6} style={{color: "black"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Grid>
          <Grid item xs={6} lg={6} sm={6} style={{color: "black"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Demo1;
