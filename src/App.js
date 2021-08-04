import './App.css';
import Intro from './components/Intro.js';
import StickyFooter from './components/StickyFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Snowfall from 'react-snowfall';
import '@fontsource/roboto';

function App() {
  return (
    <Container component="main">
        <Snowfall snowflakeCount={7} color="#7a8b96" />
        <CssBaseline />
        <Intro/>
        <StickyFooter />
    </Container>
  );
}

export default App;
