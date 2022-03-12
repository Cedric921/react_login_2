import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Button } from '@mui/material'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
          border: 0,
          borderRadius: 15,
          width: '100%',
          color: 'white',
          padding: '15px 30px',
        },
      },
    },
  },
})


export const ButtonStyled = (props) => {
  
  return (
     <ThemeProvider theme={theme}>
       <Button> {props.children}</Button>
    </ThemeProvider>
  )
}