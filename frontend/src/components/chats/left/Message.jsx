import { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ArchiveIcon from '@mui/icons-material/Archive';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

const Message = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'justify-between',
        gap: '16px',
        alignItems: 'center',
        padding: 0,
        mb: 1,
        p: 1,
        '&:hover': {
          border: '1px solid #ccc',
          '& .addIcon': {
            display: 'flex',
          },
        },
      }}
    >
      <Avatar
        alt='Remy Sharp'
        src='https://mui.com/static/images/avatar/2.jpg'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body1'>Subodh</Typography>
        <Typography variant='caption'>Bhai kya kar rha hai tu ? </Typography>
      </Box>
      <Typography variant='overline'>
        {new Date().toLocaleString('en-IN').split(' ')[1]}
      </Typography>

      <IconButton
        onClick={handleClick}
        className='addIcon'
        sx={{ display: 'none' }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MarkAsUnreadIcon />
          </ListItemIcon>
          <ListItemText>Mark as Unread</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <VolumeOffIcon />
          </ListItemIcon>
          <ListItemText>Mute</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText>Archive Chat</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ClearIcon />
          </ListItemIcon>
          <ListItemText>Clear Messages</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Message;
