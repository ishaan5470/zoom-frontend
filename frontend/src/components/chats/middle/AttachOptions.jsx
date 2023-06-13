import { useState } from 'react';
import { Box, Menu, MenuItem, IconButton } from '@mui/material';

import AttachFileIcon from '@mui/icons-material/AttachFile';

const AttachOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <AttachFileIcon />
      </IconButton>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Images</MenuItem>
        <MenuItem onClick={handleClose}>Videos</MenuItem>
        <MenuItem onClick={handleClose}>Document</MenuItem>
      </Menu>
    </Box>
  );
};

export default AttachOptions;
