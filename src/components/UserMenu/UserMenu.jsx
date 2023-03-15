import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <Box component="div" sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Text>
        Welcome, <b>{userName}</b>
      </Text>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
        // sx={{
        //   height: 30,
        //   width: 100,
        //   backgroundColor: 'green',
        //   ':hover': { backgroundColor: 'orange' },
        // }}
      >
        Logout
      </Button>
    </Box>
  );
};
