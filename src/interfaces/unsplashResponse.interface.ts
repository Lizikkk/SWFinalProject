import type { UnsplashImage } from "./unsplashImage.interface";

export interface UnsplashResponse {
    results: UnsplashImage[];
    total_pages: number;
  }