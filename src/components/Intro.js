import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../imgs/avatar.jpg';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: "#fff"
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
        <Box my={2}>

            <Avatar alt="Andre Ribau" src={avatar} className={classes.large} />

            <Typography component="h1" variant="h5">
                Site Reliability Engineer / Software Engineer
            </Typography>

        </Box>
    </div>
  );
}