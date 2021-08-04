import './App.css';
import Intro from './components/Intro.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <Container component="main" maxWidth="sm">
     <Snowfall snowflakeCount={7}/>
        <CssBaseline />
        <Box my={1}>
            <Intro/>
        </Box>
    </Container>
  );
}

export default App;
