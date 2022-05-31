import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const VisitorLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        height: '100%',
        bgcolor: '#474747',
        zIndex: -2,
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default VisitorLayout;
