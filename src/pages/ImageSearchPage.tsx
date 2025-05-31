import { useImageSearch } from '../hooks/useImageSearch';
import { SearchInput } from '../components/SearchInput';
import { FilterBtns } from '../components/FilterBtns';
import { ImageSearchContent } from '../components/ImageSearchContent';
import { title, errorMsg} from '../styles/styles';


export const ImageSearchPage = () => {
  const {
    query,
    setQuery,
    page,
    setPage,
    handleSelection,
    data,
    isLoading,
    error,
    isError,
  } = useImageSearch();

  return (
    <div>
      <h1 className={title}>Image Search</h1>

      {isError && (
        <p className={errorMsg}>
          {error instanceof Error ? error.message : error}
        </p>
      )}

      <SearchInput value={query} onChange={setQuery} />
      <FilterBtns onSelect={handleSelection} />

      <ImageSearchContent
        data={data}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
      />
    </div>
  );
}
