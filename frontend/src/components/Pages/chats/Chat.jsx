import React from 'react';
import { Box } from '@mui/material';

import LeftSideBar from './left/LeftSideBar';
import ChatArea from './middle/ChatArea';
import RightSideBar from './right/RightSideBar';

const Chat = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        m: 'auto',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '24px',
      }}
    >
      <LeftSideBar />
      <ChatArea />
      <RightSideBar />
    </Box>
  );
};

export default Chat;
