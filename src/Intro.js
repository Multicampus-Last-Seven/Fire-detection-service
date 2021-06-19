import { Typography } from "@material-ui/core";
import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { procedure, projectIntro, usecase } from "./IntroDesc";

const useStyles = makeStyles((theme) => ({
  myContainer: {
    padding: theme.spacing(3),
  },

  imgSize: {
    paddingTop: theme.spacing(3),
    width: "100%",
  },

  introText: {
    paddingTop: theme.spacing(2),
    fontSize: "25px",
    textAlign: "center",
  },

  procedure: {
      paddingTop: theme.spacing(1),
      fontSize: "20px"
  }
}));

function Intro() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.myContainer}>
        <img src="./images/intro1.jpg" alt="" className={classes.imgSize} />
        <Typography className={classes.introText}>{projectIntro}</Typography>
        <img src="./images/usecase.jpg" alt="" className={classes.imgSize} />
        <Typography className={classes.introText}>{usecase}</Typography>
        <img
          src="./images/architecture.jpg"
          alt=""
          className={classes.imgSize}
          style={{ marginTop: "30px" }}
        />
        <Typography className={classes.introText}>
            How it works
        </Typography>
        <Typography className={classes.procedure}>
            {procedure}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Intro;
