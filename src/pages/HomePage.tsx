import { Link } from 'react-router-dom';
import { title, linkBtn } from '../styles/styles';

export const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className={title}>Image Search with Unsplash</h1>
      <Link
        to="/images"
        className={linkBtn}
      >
        Go to Image Search
      </Link>
    </main>
  );
};
