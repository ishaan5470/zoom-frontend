import { useState } from "react";
import { Box, Menu, MenuItem, IconButton, ListItemIcon } from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";

import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideocamIcon from "@mui/icons-material/Videocam";

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
        <AttachFileIcon style={{color:"#5D7D87"}}/>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        /*PaperProps={{
          style: {
            //transform: "translateY(-55px)",
          },
        }}*/
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TextSnippetIcon />
          </ListItemIcon>
          Images
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CameraAltIcon />
          </ListItemIcon>
          Videos
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <VideocamIcon />
          </ListItemIcon>
          Document
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AttachOptions;
