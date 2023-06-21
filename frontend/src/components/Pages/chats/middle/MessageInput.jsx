import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import React from 'react';

import MoodIcon from '@mui/icons-material/Mood';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import AttachOptions from './AttachOptions';

const MessageInput = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
      <AttachOptions/>
      <TextField
        sx={{ borderRadius: '5px' }}
        fullWidth
        size='small'
        placeholder='Type your message Here'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <MoodIcon style={{color:"#5D7D87"}}/>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <KeyboardVoiceIcon style={{color:"#5D7D87"}}/>
            </InputAdornment>
          ),
        }}
      ></TextField>
      <IconButton >
        <SendIcon style={{color:"#5D7D87"}}/>
      </IconButton>
    </Box>
  );
};

export default MessageInput;
