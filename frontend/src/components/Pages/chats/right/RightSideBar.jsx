import { Box, Divider } from "@mui/material";
import Profile from "./Profile";
import Multimedia from "./Multimedia";
import Attachment from "./Attachment";

const RightSideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //backgroundColor: '#e1e1e1',
        backgroundColor: "#white",
        p: 1,
        // borderRadius: "5px",
        //border: "2px solid red",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        borderRadius: "10px",
        //padding:"10px 16px"
      }}
    >
      <Profile />
      <Divider sx={{ my: 1 }} />
      <Multimedia />
      <Divider sx={{ my: 1 }} />
      <Attachment />
    </Box>
  );
};

export default RightSideBar;
