import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const getIsLoggedIn = state => state.auth.isLoggedIn;
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn;
  return shouldRedirect ? <Navigate to="/contacts" replace /> : children;
}
