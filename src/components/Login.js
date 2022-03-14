import React, { useState } from 'react';
import { ButtonStyled, TypographyStyled } from '../themes/Components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../themes/Theme'; 

import {
  Container,
  Grid,
  Stack,
  Box,
  CssBaseline,
  InputLabel,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SvgIcon from '@mui/material/SvgIcon'
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption'
import ImageBg from './../assets/bg.jpg'
import infinite from './../assets/infinite.png'

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  })

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
      </SvgIcon>
    )
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box sx={{}} />
        </Container>
        <Container>
          <Grid
            container
            sx={{
              bgcolor: 'white',
              height: '90vh',
              margin: '35px',
              mx: 'auto',
              textAlign: 'center',
              borderRadius: 5,
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.4)',
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                bgcolor: 'primary',
                textAlign: 'center',
                borderRadius: 5,
                px: 10,
                py: 2,
              }}
            >
              <Stack spacing={2}>
                <Typography variant='p' component='p'>
                  WELCOME TO
                </Typography>

                <TypographyStyled variant='h4' component='h4'>
                  <img src={infinite} alt='mon_logo' className='monLogo' />
                  INFINITY
                </TypographyStyled>
                <Typography
                  variant='p'
                  component='p'
                  sx={{
                    color: 'rgb(153, 130, 127)',
                    py: '1%',
                  }}
                >
                  Log in to get the moment updates on the things that interest
                  you
                </Typography>

                <FormControl
                  sx={{ m: 1, p: 0, width: '100%' }}
                  //variant='outlined'
                >
                  <InputLabel htmlFor='outlined-adornment-password'>
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id='outlined-adornment'
                    sx={{
                      px: '0',
                      width: '100%',
                      borderRadius: 4,
                    }}
                    type='text'
                    value={values.username}
                    onChange={handleChange('username')}
                    startAdornment={
                      <InputAdornment position='start'>
                        <AccountCircle
                          sx={{
                            mx: 2,
                            my: 0,
                          }}
                        />
                      </InputAdornment>
                    }
                    label='username'
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
                  <InputLabel htmlFor='outlined-adornment-password'>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id='outlined-adornment-password'
                    sx={{
                      px: '0',
                      width: '100%',
                      borderRadius: 4,
                    }}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    startAdornment={
                      <InputAdornment position='start'>
                        <EnhancedEncryptionIcon
                          sx={{
                            mx: 2,
                          }}
                        />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                          sx={{
                            mx: 2,
                          }}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label='Password'
                  />
                </FormControl>
                <Stack justifyContent='space-between' direction='row'>
                  <ButtonStyled>SIGN IN</ButtonStyled>
                </Stack>
                <Typography component='span'>
                  Do you have any account ?{' '}
                  <Typography
                    component='a'
                    href='htttps://privacylink.com'
                    color='primary.main'
                    sx={{
                      color: 'red',
                      textDecoration: 'none',
                    }}
                  >
                    {'Sign up Now'}
                  </Typography>
                </Typography>
                <Divider variant='middle' />
                <Typography>Continue with social media</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon sx={{ color: 'red' }} />
                  <HomeIcon sx={{ color: 'red' }} />
                  <HomeIcon sx={{ color: 'red' }} />
                  <HomeIcon sx={{ color: 'red' }} />
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                borderRadius: '10px',
              }}
            >
              <Stack
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  background: `url(${ImageBg})`,
                  my: 0,
                  mx: 0,
                  p: 5,
                  bgcolor: 'red',
                  py: '1%',
                }}
              >
                <Box
                  sx={{
                    width: '50px',
                    p: 1,
                  }}
                >
                  <img src={infinite} alt='mon_logo' className='monLogo' />
                </Box>
                <Typography
                  variant='h4'
                  component='h4'
                  sx={{
                    textAlign: 'center',
                    color: 'White',
                  }}
                >
                  INFINITY
                </Typography>
                <Typography
                  variant='p'
                  component='p'
                  sx={{
                    color: 'white',
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt asperiores enim non labore sapiente? Quod nisi eaque
                  ea fugiat consequatur, dignissimos debitis a optio.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Login
