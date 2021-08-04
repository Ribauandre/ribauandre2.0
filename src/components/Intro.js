import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../imgs/avatar.jfif';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={7}>
        <Grid item xs>
            <Avatar alt="Andre Ribau" src={avatar} className={classes.large} />
        </Grid>
        <Grid item xs>
            <Typography component="h1" variant="h5">
                SRE / SWE
            </Typography>
        </Grid>
    </Grid>
  </div>
  );
}