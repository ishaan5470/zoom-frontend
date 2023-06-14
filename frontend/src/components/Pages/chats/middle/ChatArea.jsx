import { Box } from '@mui/material';
import Header from './Header';
import MessageArea from './MessageArea';
import MessageInput from './MessageInput';

const ChatArea = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e1e1e1',
        flexGrow: 1,
        gap: '15px',
        borderRadius: '10px',
        p: 2,
      }}
    >
      <Header />
      <MessageArea />
      <MessageInput />
    </Box>
  );
};

export default ChatArea;
