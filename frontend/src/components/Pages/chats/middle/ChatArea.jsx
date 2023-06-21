import { Box } from "@mui/material";
import Header from "./Header";
import MessageArea from "./MessageArea";
import MessageInput from "./MessageInput";

const ChatArea = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //backgroundColor: '#e1e1e1',
        flexGrow: 1,
        gap: "7px", //gap: 15 initially
        borderRadius: "10px",
        p: 1, //p:2(initially)
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Header />
      <MessageArea />
      <MessageInput />
    </Box>
  );
};

export default ChatArea;
