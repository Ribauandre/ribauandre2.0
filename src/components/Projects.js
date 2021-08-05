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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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

export default function StickyFooter() {
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
                                    Utilizes full stack React, Postgres, and SpringBoot Rest API/Java backend,
                                    to deliver an application that allows associates to determine source code, automatically builds/deploys code to PAS infrastructure.
                                    Along with persistent environment status overviews and status pages.
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
                        <Card className={classes.card} variant="outlined">
                            <CardHeader className={classes.gutter} title="SkillsBank" />
                            <CardContent>
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