import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { fetchMovieById } from '../../movies-api';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import css from './MovieDetailsPage.module.css';
import { fetchMovieCastById } from '../../movies-api';

import MovieCast from '../../components/MovieCast/MovieCast';
import { FaLessThan } from 'react-icons/fa';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [MovieDetailsPageLoading, setMovieDetailsPageLoading] = useState(false);
const[MovieDetailsPageError, setMovieDetailsPageError] = useState(false);
  useEffect(() => {
   
    async function getMovieById() {
      try {
        setMovieDetailsPageLoading(true);
        const result = await fetchMovieById(movieId);
        setMovieDetail(result.data);
      } catch (error) {
        setMovieDetailsPageError(true)
       
      } finally {
        setMovieDetailsPageLoading(false)
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <section className={css.movieDetailsPageSection}>

      <div className={css.movieDetailsPageContainer}>
          <Link className ={css.movieDetailsPageLimk} to="/">go back</Link>
      {MovieDetailsPageLoading && (
          <div className={css.movieDetailsPageLoadingContainer}>
            <BarLoader />
          </div>
        )}
        {MovieDetailsPageError && <p>Ooops! Something went wrong! Reload the page please!</p> }
        {movieDetail && <MovieDetailsCard data={movieDetail} />}
        <ul className={css.movieDetailsPageList} >
          <li>
            <Link to={'cast'}>Movie Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Movie Review</Link>
          </li>
        </ul>

        <Outlet />
      </div>
      ;
    </section>
  );
}
