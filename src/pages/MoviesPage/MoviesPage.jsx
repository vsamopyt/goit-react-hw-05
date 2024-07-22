import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import BarLoader from 'react-spinners/BarLoader';
import { fetchMoviesBySearch } from '../../movies-api';
import css from './MoviesPage.module.css';
import { FaLessThanEqual } from 'react-icons/fa6';

export default function MoviesPage() {
  const [searchName, setSearchName] = useState('');
  function handleForm(newSearchName) {
    setSearchName(newSearchName);
  }
  const [searchValue, setSearchValue] = useState([]);
  const [moviesPageLoading, setMoviesPageLoading] = useState(false);
  const [moviesPageError, setMoviesPageError] = useState(false);
  useEffect(() => {
    async function getMovieBySearch() {
      try {
        setMoviesPageLoading(true);
        const result = await fetchMoviesBySearch(searchName);

        setSearchValue(result.data.results);
      } catch (error) {
        setMoviesPageError(true);
      } finally {
        setMoviesPageLoading(false);
      }
    }
    getMovieBySearch();
  }, [searchName]);

  return (
    <div>
      {moviesPageError && (
        <p>Ooops! Something went wrong! Reload the page please!</p>
      )}
      <h1>Movies page</h1>
      <SearchBar onChange={handleForm} />
      {moviesPageLoading && (
        <div className={css.moviesPageLoadingContainer}>
          <BarLoader />
        </div>
      )}
      {searchValue.length && <MovieList array={searchValue} />}
    </div>
  );
}
