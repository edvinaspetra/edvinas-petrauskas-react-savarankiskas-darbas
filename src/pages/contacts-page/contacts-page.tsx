import React from 'react';
import {
  Typography,
  Box,
  Container,
} from '@mui/material';

const ContactsPage: React.FC = () => (
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
        Contacts
      </Typography>
      <Typography
        component="h4"
        variant="h5"
        sx={{
          color: 'white',
          fontFamily: 'Arial',
          mt: 3,
        }}
      >
        Cabinet Secretariat
      </Typography>
      <Typography
        component="h4"
        variant="h6"
        sx={{
          color: 'white',
          fontFamily: 'Arial',
        }}
      >
        Address: 1-6-1 Nagata-cho, Chiyoda-ku, Tokyo 100-8968
      </Typography>
      <Typography
        component="h4"
        variant="h6"
        sx={{
          color: 'white',
          fontFamily: 'Arial',
        }}
      >
        Phone: +81-3-5253-2111
      </Typography>

      <Box
        component="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Regions_and_Prefectures_of_Japan_2.svg/1546px-Regions_and_Prefectures_of_Japan_2.svg.png"
        sx={{
          width: '40%',
          mx: 'auto',
          py: 5,
        }}
      />
    </Box>
  </Container>
);

export default ContactsPage;
