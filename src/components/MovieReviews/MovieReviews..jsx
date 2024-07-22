import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import { fetchMovieReviwsById } from '../../movies-api';
import MovieReviewsCard from "../MovieReviewsCard/MovieReviewsCard";
import css from "./MovieReviews.module.css"
// import { FaBedPulse } from 'react-icons/fa6';

export default function MovieReviews() {
  const { movieId } = useParams();
 const [movieReviews, setMovieReviews] = useState([]);
 const [movieReviewsLoading, setMovieReviewsLoading] = useState(false);
 const [movieReviewsError, setMovieReviewsError] = useState(false);
useEffect(()=>{
    async function getMovieReviwsById () {

      try {
        setMovieReviewsLoading(true)
        const result = await fetchMovieReviwsById(movieId) 
        // console.log(result);
        // console.log(result.data.results);
        setMovieReviews(result.data.results)
        
      } catch (error) {
        setMovieReviewsError(true)
      } finally {
        setMovieReviewsLoading(false)
      }
       
    }
    getMovieReviwsById ()
},[movieId])
  return (


    <div>
    
      <h2>Movie Reviws</h2>
      {movieReviewsError && (
        <p>Ooops! Something went wrong! Reload the page please!</p>
      )}
      {movieReviewsLoading && (
        <div className={css.movieReviewsLoadingContainer}>
          <BarLoader />
        </div>
      )}
      <ul>

      {movieReviews.length >0 ? movieReviews.map(item =>{
        return (
            <li key ={item.id}>
                {/* {item.author} */}
                <MovieReviewsCard item ={item}/>
            </li>
        )
      }) : <p>Sorry, there are no reviews yet.</p>}
      </ul>
    </div>
  );
}
