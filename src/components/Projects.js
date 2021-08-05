import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Gi3DHammer } from "react-icons/gi";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: "#fff",
    flexGrow: 1,
  },
  card: {
    color: "#fff",
    background: "#0d1117",
    borderColor: "#30363c"
  },
  gutter: {
      color: "#fff",
      background: "#30363c",
      flex: '1 0 auto',

  },
  icon: {
        color: "#fff",
  },

}));

export default function Projects() {
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
                        <Card className={classes.card} variant="outlined">
                        <CardHeader className={classes.gutter} title="Self-Service Portal"/>
                            <CardContent>
                                <Typography variant="body2" component="p">
                                <ul>
                                  <li>Utilizes full stack React, Postgres, and SpringBoot Rest API/Java backend.</li>
                                  <li>This delivers an application that allows users to determine source code and builds/deploys code to PAS .</li>
                                  <li>SSP also provides application monitoring and env status pages.</li>
                                </ul>
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item sm xs={10}>
                        <Card className={classes.card} variant="outlined">
                        <CardHeader className={classes.gutter} title="Library-Lender"
                            action={
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="right"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <a href="https://github.com/Ribauandre/LibraryLender">
                                            <IconButton aria-label="Git">
                                                <GitHubIcon className={classes.icon} />
                                            </IconButton>
                                        </a>
                                    </Grid>
                                    <Grid item>
                                        <a href="https://thawing-citadel-50331.herokuapp.com/">
                                            <IconButton aria-label="Website">
                                                <WebIcon className={classes.icon} />
                                            </IconButton>
                                        </a>
                                    </Grid>
                                </Grid>
                            }
                        />
                          <CardActionArea href="https://thawing-citadel-50331.herokuapp.com/">
                            <CardContent>
                              <Typography variant="body2" component="p">
                                <ul>
                                  <li>Uses MongoDB Atlas cloud data-base on an elastic cluster, Node.js Express as the application server and React as the front-end technology.</li>
                                  <li>LibraryLender is deployed to Heroku and utilizes the MERN stack.</li>
                                  <li>This helps to create a responsive Library system that allows a user to Donate a book, Borrow/Return a book, or Delete the book.</li>
                                </ul>
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
                        <Card className={classes.card} variant="outlined">
                        <CardHeader className={classes.gutter} title="BudgetTime.io"
                            action={
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="right"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <a href="https://github.com/Ribauandre/BudgetTime.io">
                                            <IconButton aria-label="Website">
                                                <GitHubIcon className={classes.icon} />
                                            </IconButton>
                                        </a>
                                    </Grid>
                                </Grid>
                            }
                        />
                          <CardActionArea href="https://github.com/Ribauandre/BudgetTime.io">
                            <CardContent>
                              <Typography variant="body2" component="p">
                               <ul>
                                <li>A stand alone application that uses MySql as a database, Java in the middle and JavaFX as the front-end.</li>
                                <li>BudgetTime.io allows you to create an account and set categories in which you are allowed to allot a percentage of your net income to.</li>
                                <li>It then takes that information and creates charts and graphs that shows how much of your money goes into each category.</li>
                               </ul>
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item sm xs={10}>
                        <Card className={classes.card} variant="outlined">
                            <CardHeader className={classes.gutter} title="SkillsBank" />
                            <CardContent>
                              <Typography variant="body2" component="p">
                              <ul>
                                <li>Utilizes full stack J2EE, AS400, and WebSphere, to deliver an application that allows an associate to rate themselves on many different subjects.</li>
                                <li>this allows them to gain recognition for what they may know while also allowing managers to identify gaps in skill.</li>
                                <li>Managers could then match someone with an expert to help them develop their skills.</li>
                              </ul>
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