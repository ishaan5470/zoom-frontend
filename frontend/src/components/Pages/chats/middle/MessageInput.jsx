import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import React from 'react';

import MoodIcon from '@mui/icons-material/Mood';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import AttachOptions from './AttachOptions';

const MessageInput = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
      <AttachOptions />
      <TextField
        sx={{ borderRadius: '5px' }}
        fullWidth
        size='small'
        placeholder='Type your message Here'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <MoodIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <KeyboardVoiceIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <IconButton sx={{ backgroundColor: 'white' }}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;
