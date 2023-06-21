import { Box } from "@mui/material";
import MessageBox from "./MessageBox";

const MessageArea = () => {
  // 0 - reciever, 1 - sender
  const dummyMessages = [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 2,
        height: "335px",
        overflowY: "hidden",
        "&:hover": {
          overflowY: "scroll",
        },
        "&::-webkit-scrollbar": {
          width: "2px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey",
        },
        boxShadow: "rgba(0, 0, 0, 0.06) 1px 2px 4px 1px inset;",
      }}
    >
      {dummyMessages.map((self, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: `${self ? "flex-end" : "flex-start"}`,
            mb: 1, // mb:2 (initially)
          }}
        >
          <MessageBox />
        </Box>
      ))}
    </Box>
  );
};

export default MessageArea;
