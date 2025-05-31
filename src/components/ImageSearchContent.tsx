import { useState } from 'react';
import { ImageGrid } from './ImageGrid';
import { Pagination } from './Pagination';
import type { UnsplashResponse } from '../interfaces/unsplashResponse.interface';
import type { UnsplashImage } from '../interfaces/unsplashImage.interface';
import { loading } from '../styles/styles';

interface Props {
  data?: UnsplashResponse;
  page: number;
  setPage: (page: number) => void;
  isLoading: boolean;
}

export const ImageSearchContent = ({ data, page, setPage, isLoading }: Props) => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  };


  if (isLoading) return <p className={loading}>Loading...</p>;
  if (!data) return null;

  return (
    <>
      <ImageGrid images={data.results} onImageClick={handleImageClick} />

      <Pagination
        currentPage={page}
        totalPages={data.total_pages}
        onPageChange={setPage}
      />

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setSelectedImage(null);
          }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}
        >
          <img
            src={selectedImage.urls.full || selectedImage.urls.full}
            alt={selectedImage.alt_description || 'Full image'}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      )}
    </>
  );
};