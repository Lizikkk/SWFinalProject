import { Routes, Route } from 'react-router-dom';
import { ImageSearchPage } from '../pages/ImageSearchPage';
import { HomePage } from '../pages/HomePage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/images" element={<ImageSearchPage/>} />
    </Routes>
  );
};
