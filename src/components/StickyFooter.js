import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
  },
  footer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    alignItems: "center",
    color: "#fff",
    flexGrow: 1,

  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="h2" component="h5">
            <a href="https://github.com/Ribauandre"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/ribauandre"><FaLinkedin /></a>
            <a href="https://triplebyte.com/tb/andre-ribau-uk5qixs"><FaExternalLinkSquareAlt /></a>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}