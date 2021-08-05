import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../imgs/avatar.jfif';
import Grid from '@material-ui/core/Grid';
import Typing from 'react-typing-animation';
import { GrApple } from "react-icons/gr";



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    color: "#fff",
    flexGrow: 1,
  },
  large: {
      width: theme.spacing(30),
      height: theme.spacing(30),

  },
}));

export default function Intro() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
     <Grid container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={7}
     >
        <Grid item xs>
            <Avatar alt="Andre Ribau" src={avatar} className={classes.large} />
        </Grid>
        <Grid item xs>
            <Typography component="h1" variant="h3">
               <Typing>
                    <Typing.Speed ms={100} />
                    <span>Hey</span>
                    <Typing.Delay ms={250} />
                    <Typing.Backspace count={3} />
                    <Typing.Speed ms={100} />
                    <span>Hello</span>
                    <Typing.Delay ms={250} />
                    <Typing.Backspace count={5} />
                    <Typing.Speed ms={100} />
                    <span>Hi, im Andre!</span>
                </Typing>
            </Typography>
        </Grid>

        <Grid item xs>
            <Typography component="h1" variant="h5" align="center">
                SRE/SWE at <GrApple /> with a passion for all things tech!
            </Typography>
        </Grid>
     </Grid>
  </div>
  );
}