import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    textSecondary: {
        main: '#f0e9ee',
    },
    primary: {
      main: '#161b21',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0d1117',
    },
  },
});

export default theme;