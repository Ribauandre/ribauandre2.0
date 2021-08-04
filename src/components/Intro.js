import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../imgs/avatar.jfif';
import Grid from '@material-ui/core/Grid';
import Typing from 'react-typing-animation';
import { Gi3DHammer } from "react-icons/gi";
import { GrApple } from "react-icons/gr";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';


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
  card: {
    color: "#fff",
    background: "#30363d",
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

        <Grid item xs>
            <Typography component="h1" variant="h4">
               <Gi3DHammer /> Projects
            </Typography>
        </Grid>
        <Grid item xs>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={7}
            >
                <Grid item sm xs={10}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Self-Service Portal
                            </Typography>
                            <Typography variant="body2" component="p">
                                Utilizes full stack React, Postgres, and SpringBoot Rest API/Java backend,
                                to deliver an application that allows associates to determine source code, automatically builds/deploys code to PAS infrastructure.
                                Along with persistent environment status overviews and status pages.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm xs={10}>
                    <Card className={classes.card}>
                      <CardActionArea href="https://thawing-citadel-50331.herokuapp.com/">
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Library-Lender
                          </Typography>
                          <Typography variant="body2" component="p">
                            Uses MongoDB Atlas cloud data-base on an elastic cluster. Node.js Express as the application server. Then
                            React as the front-end technology and Heroku for deployment. This MERN stack was used to create a fast,
                            responsive Library system that allows a user to Donate a book, Borrow/Return a book, or Delete the book.
                            Please feel free to add a book!
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={7}
            >
                <Grid item sm xs={10}>
                    <Card className={classes.card}>
                      <CardActionArea href="https://github.com/Ribauandre/BudgetTime.io">
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            BudgetTime.io
                          </Typography>
                          <Typography variant="body2" component="p">
                             A stand alone application that uses MySql as a database, Java in the middle and JavaFX as the front-end.
                             This application allows you to create an account and set categories in which you are allowed to alot a
                             precentage of your net income to. It then takes that information and creates charts and graphs that shows
                             how much of your money goes into each category.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm xs={10}>
                    <Card className={classes.card}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            SkillsBank
                          </Typography>
                          <Typography variant="body2" component="p">
                            Utilizes full stack J2EE, AS400, and WebSphere, to deliver an application that allows an associate to rate
                            themselves on many different subjects and gain recognition for what they may know while also allowing
                            managers to identify gaps in skill and lead an associate to develop their skills.
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  </div>
  );
}