import React from 'react';
import {
  Typography,
  Box,
  Container,
} from '@mui/material';
import AboutJapanImage from './about-japan.png';

const AboutPage: React.FC = () => (
  <Container>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{
          color: 'white',
          fontFamily: 'Arial',
          fontWeight: 500,
          py: 3,
        }}
      >
        About
      </Typography>
      <Box
        component="img"
        src={AboutJapanImage}
        sx={{
          width: '90%',
          mx: 'auto',
          pb: 5,
        }}
      />
    </Box>
  </Container>
);

export default AboutPage;
