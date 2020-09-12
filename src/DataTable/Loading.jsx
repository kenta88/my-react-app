import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: 100,
    background: "white"
  },
  progress: {
    position: "absolute",
    margin: "auto",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress className={classes.progress}/>
    </div>
  );
}

export default Loading;
