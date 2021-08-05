import './App.css';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import StickyFooter from './components/StickyFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Snowfall from 'react-snowfall';
import '@fontsource/roboto';

function App() {
  return (
    <Container component="main">
        <Snowfall snowflakeCount={7} color="#7a8b96" />
        <CssBaseline />
        <Grid container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <Intro/>
            </Grid>
            <Grid item>
                <Projects/>
            </Grid>
            <Grid item>
                <StickyFooter />
            </Grid>
        </Grid>
    </Container>
  );
}

export default App;
