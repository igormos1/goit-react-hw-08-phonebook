import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Div, Link, Name } from './AppBar.styled';
import { getUserName } from 'redux/auth/auth-slice';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(getUserName);

  const handlerLogOut = e => {
    dispatch(authOperations.logOut());
  };

  return (
    <Div>
      <Link to="contacts"> Contacts</Link>
      <Name>{name}</Name>
      <div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={handlerLogOut}
        >
          Log out
        </Button>
      </div>
    </Div>
  );
};
