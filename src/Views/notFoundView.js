import { Link } from 'react-router-dom';
export default function NotFoundView() {
  return (
    <h1>
      404 Page Not Found, go to <Link to="/">Home Page</Link>
    </h1>
  );
}
