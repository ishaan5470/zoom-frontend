import { Box } from "@mui/material";

import SearchBar from "./SearchBar";
import MessageTabs from "./MessageTabs";

const LeftSideBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 0.1,
        p: 2,
        //backgroundColor: '#e1e1e1',
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        borderRadius: "10px",
        paddingBottom: "0px",
      }}
    >
      <SearchBar />
      <MessageTabs />
    </Box>
  );
};

export default LeftSideBar;
