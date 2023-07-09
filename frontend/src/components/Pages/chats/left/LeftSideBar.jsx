import { Box } from '@mui/material';

import SearchBar from './SearchBar';
import MessageTabs from './MessageTabs';

const LeftSideBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 0.1,
        p: 2,
        backgroundColor: '#e1e1e1',
        borderRadius: '10px',
      }}
    >
      <SearchBar />
      <MessageTabs />
    </Box>
  );
};

export default LeftSideBar;
