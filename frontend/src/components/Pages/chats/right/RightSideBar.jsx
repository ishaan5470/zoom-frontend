import { Box, Divider } from '@mui/material';
import Profile from './Profile';
import Multimedia from './Multimedia';
import Attachment from './Attachment';

const RightSideBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e1e1e1',
        p: 2,
        borderRadius: '5px',
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
