import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchMenu from './SearchMenu';

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      <TextField
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon style={{color:"#5D7D87"}}/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder='Search'
      />
      <SearchMenu />
    </Box>
  );
};

export default SearchBar;
