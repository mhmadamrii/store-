import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Probably you've lost</h1>
      <h1>Not found</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
}
