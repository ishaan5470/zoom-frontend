import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2px',
      }}
    >
      <Avatar
        alt='Username'
        src='https://mui.com//static/images/avatar/1.jpg'
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Typography>Subodh</Typography>
        <Box
          sx={{
            height: '10px',
            width: '10px',
            backgroundColor: 'green',
            borderRadius: '100%',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Profile;
