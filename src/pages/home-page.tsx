import React from 'react';
import {
  Typography,
  Box,
  Container,
} from '@mui/material';

const HomePage: React.FC = () => (
  <Box sx={{
    zIndex: -2,
    position: 'absolute',
    height: '100vh',
    bgcolor: '#474747',
  }}
  >
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px -170px 200px -50px #474747 inset',
      }}
    >

      <Box
        component="img"
        src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
        sx={{
          width: '100%',
          objectFit: 'contain',
          zIndex: -1,
          position: 'relative',
        }}
      />
    </Box>
    <Container>

      <Typography
        component="h1"
        variant="h2"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          mb: 3,
          position: 'absolute',
          top: '30%',
          color: 'white',
          fontFamily: 'Arial',
          fontWeight: 900,
        }}
      >
        WELCOME TO
        <Typography
          component="span"
          variant="h1"
          sx={{
            color: 'white',
            fontFamily: 'Arial',
            fontWeight: 900,
          }}
        >
          JAPAN
        </Typography>
      </Typography>
      <Typography sx={{ color: 'white', mt: 10 }}>
        More information coming soon. Please wait for updates.
      </Typography>
      <Typography sx={{ color: 'white' }}>
        Have a nice day :)
      </Typography>
    </Container>
  </Box>
);

export default HomePage;
