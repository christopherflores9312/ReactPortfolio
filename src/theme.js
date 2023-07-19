import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#92ccce',
    },
    secondary: {
      main: '#6e7c7d',
    },
    background: {
      default: '#1f2935',
      paper: '#31343d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
