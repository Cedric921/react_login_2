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
            p: 4,
            textAlign: 'center',
            borderRadius: 1,
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.4)',
          }}
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant='p' component='p'>
                Welcome to
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

              <Input
                label='sername'
                placeholder='Username'
              />

              <Input
                label='password' placeholder='Password' />
              <Stack justifyContent='space-between' direction='row'>
                <Button
                  color='primary'
                  variant='contained'
                  sx={{
                    px: '0', py: '2',
                    width: '100%', bgcolor: 'red',
                    borderRadius: 4
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
                >
                  {'Sign up Here'}
                </Typography>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              sx={{
                width: 0.75,
                my: { xs: 8, md: 0 },
                mx: 'auto',
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
