import { useEffect, useState } from 'react';
import { fetchMovieCastById } from '../../movies-api';
import { useParams } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import MovieCastCard from '../MovieCastCard/MovieCastCard';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();

  const [movieCastDetail, setMovieCastDetail] = useState([]);
  const [movieCastLoading, setMovieCastLoading] = useState(false);
  const [movieCastError, setMovieCastError] = useState(false);
  useEffect(() => {
    async function getMovieCastById() {
      try {
        setMovieCastLoading(true);
        const result = await fetchMovieCastById(movieId);
        setMovieCastDetail(result.data.cast);
      } catch (error) {
        setMovieCastError(true);
      } finally {
        setMovieCastLoading(false);
      }
    }
    getMovieCastById();
  }, [movieId]);
  console.log(movieCastDetail);
  return (
    <div>
      

      <h2>Movie Cast</h2>
      {movieCastError && (
        <p>Ooops! Something went wrong! Reload the page please!</p>
      )}
      {movieCastLoading && (
        <div className={css.movieCastLoadingContainer}>
          <BarLoader />
        </div>
      )}
      {!(movieCastDetail.length > 0) && (
        <p>Sorry, there is no info about cast yet</p>
      )}
      <ul className={css.movieCastList}>
        {movieCastDetail.length > 0 &&
          movieCastDetail.map(item => {
            return (
              <li key={item.id}>
                <MovieCastCard item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
