import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from 'react'

import { Button, Typography } from '@mui/material'
import { red } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: red['A700'],
      background: 'linear-gradient(45deg, red, #FF8E53)',
      border: 0,
      borderRadius: 15,
      width: '100%',
      color: red[50],
      padding: '15px 30px',
    },
    secondary: {
      main: red[400],
    },
  },
  Button: {
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


export const ButtonStyled = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button> {props.children}</Button>
    </ThemeProvider>
  )
}

export const TypographyStyled = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography> {props.children}</Typography>
    </ThemeProvider>
  )
}
