import { useState } from 'react';
import { Box, Menu, MenuItem, IconButton } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';

const HeaderOptions = () => {
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
      <IconButton>
        <MissedVideoCallIcon />
      </IconButton>
      <IconButton onClick={handleClick}>
        <InfoIcon />
      </IconButton>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Report</MenuItem>
        <MenuItem onClick={handleClose}>Block</MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderOptions;
