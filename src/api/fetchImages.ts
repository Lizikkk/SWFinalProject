import $api from '../axios/axios';
import type { UnsplashResponse } from '../interfaces/unsplashResponse.interface';

const IMAGES_PER_PAGE = 20;

export const fetchImages = async (searchTerm: string, pageNum: number): Promise<UnsplashResponse> => {
  if (!searchTerm) {
    throw new Error('Search term is required');
  }

  const { data } = await $api.get<UnsplashResponse>('/search/photos', {
    params: {
      query: searchTerm,
      page: pageNum,
      per_page: IMAGES_PER_PAGE,
      client_id: import.meta.env.VITE_API_KEY,
    },
  });

  return data;
};