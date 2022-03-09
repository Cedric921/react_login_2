import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Stack,
  Input,
  Button,
  Box,
  CssBaseline,
  FormControlLabel,
  Typography,
  Checkbox,
} from '@mui/material'
//import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Logon = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{}} />
      </Container>
      <Container>
        <Grid
          container
          sx={{
            bgcolor: 'white',
            height: '80vh',
            margin: '10vh',
            mx: 'auto',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.4)',
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: 'white',
              textAlign: 'center',
              px: '7%',
              py: '3%',
            }}
          >
            <Stack spacing={2}>
              <Typography variant='p' component='p'>
                WELCOME TO
              </Typography>

              <Typography
                variant='h4'
                component='h4'
                sx={{
                  bgcolor: 'white',
                  textAlign: 'center',
                  color: 'red',
                }}
              >
                INFINITY
              </Typography>
              <Typography
                variant='p'
                component='p'
                sx={{
                  color: 'rgb(153, 130, 127)',
                  py: '1%',
                }}
              >
                Log in to get the moment updates on the things that interest you
              </Typography>

              <Input label='sername' placeholder='Username' />

              <Input label='password' placeholder='Password' />
              <Stack justifyContent='space-between' direction='row'>
                <Button
                  color='primary'
                  variant='contained'
                  sx={{
                    px: '0',
                    width: '100%',
                    bgcolor: 'red',
                    borderRadius: 4,
                  }}
                >
                  SIGN IN
                </Button>
              </Stack>
              <Typography component='span'>
                Do you have any account ?{' '}
                <Typography
                  component='a'
                  href='htttps://privacylink.com'
                  color='primary.main'
                  sx={{
                    color: 'red',
                    textDecoration : 'none'
                  }}
                >
                  {'Sign up Non'}
                </Typography>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              sx={{
                width: 0.75,
                my: 0,
                mx: 0,
                bgcolor : 'red'
              }}
            >
              <img src='/image.svg' alt='images' />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Logon;
