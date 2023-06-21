import { useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";

import ReportIcon from "@mui/icons-material/Report";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

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
        <VideoCallOutlinedIcon style={{ color: "#5D7D87", fontSize: "30px" }} />
      </IconButton>
      <IconButton onClick={handleClick}>
        <ReportIcon style={{ color: "#5D7D87" }} />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Report</MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "red" }}>
          Block
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderOptions;
