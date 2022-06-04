import { UserMenu } from './UserMenu';
import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Div } from './AppBar.styled';
import { Link } from './AppBar.styled';

export default function AppBar() {
  const getIsLoggedIn = state => state.auth.isLoggedIn;
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header>
        <h1>Your phonebook</h1>
        <Div>
          <Link to="/">Home</Link>
          <div>{!isLoggedIn ? <Navigation /> : <UserMenu />}</div>
        </Div>
      </header>
      <Outlet />
    </>
  );
}
