import { Box, Avatar, Typography } from '@mui/material';
import React from 'react';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          mb: 2,
        }}
      >
        <Avatar
          alt='Username'
          src='https://mui.com//static/images/avatar/1.jpg'
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2'>Subodh</Typography>
          <Typography variant='caption'>Typing .....</Typography>
        </Box>
        <Box
          sx={{
            height: '10px',
            width: '10px',
            backgroundColor: 'green',
            borderRadius: '100%',
          }}
        ></Box>
      </Box>
      <HeaderOptions />
    </Box>
  );
};

export default Header;
