import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviwsById } from '../../movies-api';
import MovieReviewsCard from "../MovieReviewsCard/MovieReviewsCard"

export default function MovieReviews() {
  const { movieId } = useParams();
 const [movieReviews, setMovieReviews] = useState([])
useEffect(()=>{
    async function getMovieReviwsById () {
        const result = await fetchMovieReviwsById(movieId) 
        console.log(result);
        console.log(result.data.results);
        setMovieReviews(result.data.results)
    }
    getMovieReviwsById ()
},[movieId])
  return (
    <div>
      <h2>Movie Reviws</h2>
      <ul>

      {movieReviews.length >0 && movieReviews.map(item =>{
        return (
            <li key ={item.id}>
                {/* {item.author} */}
                <MovieReviewsCard item ={item}/>
            </li>
        )
      })}
      </ul>
    </div>
  );
}
