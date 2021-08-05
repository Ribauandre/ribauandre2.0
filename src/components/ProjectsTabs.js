import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Gi3DHammer } from "react-icons/gi";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    backgroundColor: "#0d1117",
    color: "#fff",
    flexGrow: 1,
    display: 'flex',
    height: "auto",
  },
  tabs: {
    borderRight: `1px solid #7a8b96`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Grid container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
        >
            <Grid item xs>
                <Typography component="h1" variant="h4" align="left">
                    <Gi3DHammer /> Projects
                </Typography>
            </Grid>
            <Grid item>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                >
                  <Tab label="Self-Service Portal" {...a11yProps(0)} />
                  <Tab label="Library-Lender" {...a11yProps(1)} />
                  <Tab label="BudgetTime.io" {...a11yProps(2)} />
                  <Tab label="SkillsBank" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <ul>
                    <li>Utilizes full stack React, Postgres, and SpringBoot Rest API/Java backend.</li>
                    <li>This delivers an application that allows users to determine source code and builds/deploys code to PAS .</li>
                    <li>SSP also provides application monitoring and env status pages.</li>
                  </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <ul>
                    <li>Uses MongoDB Atlas cloud data-base on an elastic cluster, Node.js Express as the application server and React as the front-end technology.</li>
                    <li>LibraryLender is deployed to Heroku and utilizes the MERN stack.</li>
                    <li>This helps to create a responsive Library system that allows a user to Donate a book, Borrow/Return a book, or Delete the book.</li>
                  </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <ul>
                    <li>A stand alone application that uses MySql as a database, Java in the middle and JavaFX as the front-end.</li>
                    <li>BudgetTime.io allows you to create an account and set categories in which you are allowed to allot a percentage of your net income to.</li>
                    <li>It then takes that information and creates charts and graphs that shows how much of your money goes into each category.</li>
                  </ul>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <ul>
                  <li>Utilizes full stack J2EE, AS400, and WebSphere, to deliver an application that allows an associate to rate themselves on many different subjects.</li>
                  <li>this allows them to gain recognition for what they may know while also allowing managers to identify gaps in skill.</li>
                  <li>Managers could then match someone with an expert to help them develop their skills.</li>
                </ul>
                </TabPanel>
            </Grid>
        </Grid>
    </div>
  );
}