import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '../api/fetchImages';

export const useImageSearch = (initialQuery = 'search') => {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim());
      setPage(1); 
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  const queryResult = useQuery({
    queryKey: ['images', debouncedQuery, page],
    queryFn: () => fetchImages(debouncedQuery, page),
    enabled: !!debouncedQuery,
  });

  const handleSelection = (selection: string) => {
    setQuery(selection);
    setPage(1);
  };

  return {
    query,
    setQuery,
    page,
    setPage,
    handleSelection,
    ...queryResult,
  };
};