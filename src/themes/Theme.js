import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red['A700'],
    },
    secondary: {
      main: red[400],
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        background: 'linear-gradient(45deg, red, #FF8E53)',
        border: 0,
        borderRadius: 15,
        width: '100%',
        color: red[50],
        padding: '15px 30px',
      },
    },
   },
   typography: {
      h4: {
        color: red,
        textAlign: 'center',
      },
    },
}) 