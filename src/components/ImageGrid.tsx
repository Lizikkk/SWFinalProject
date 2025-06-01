import type { UnsplashImage } from '../interfaces/unsplashImage.interface';

interface ImageGridProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

export const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
  const handleImageClick = (image: UnsplashImage) => {
    onImageClick(image);
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-3 p-4 max-w-7xl">
        {images.map((image) => (
          <div key={image.id} className="aspect-square">
            <img
              src={image.urls.small}
              alt={image.alt_description || 'Unsplash image'}
              loading="lazy"
              onClick={() => handleImageClick(image)}
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-200 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};