import React from "react";
import { Box } from "@mui/material";

import LeftSideBar from "./left/LeftSideBar";
import ChatArea from "./middle/ChatArea";
import RightSideBar from "./right/RightSideBar";

const Chat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        m: "auto",
        justifyContent: "space-between",
        alignItems: "flex-start",
        //alignItems:"stretch",
        gap: "24px",
        padding: "0",
        marginTop:"5px"
      }}
    >
      <LeftSideBar />
      <ChatArea />
      <RightSideBar />
    </Box>
  );
};

export default Chat;
