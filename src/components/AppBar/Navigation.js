import { Link } from './AppBar.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="register">Sign up</Link>
      <Link to="login">Log in</Link>
    </nav>
  );
};
