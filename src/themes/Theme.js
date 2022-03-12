import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

export const theme = createTheme({
   palette: {
      primary: {
         main : red['A700'],
      },
      secondary: {
         main : red[400],
      }
  }
}); 