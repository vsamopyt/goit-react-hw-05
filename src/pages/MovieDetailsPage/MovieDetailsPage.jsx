import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../movies-api';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import css from "./MovieDetailsPage.module.css"
import { fetchMovieCastById } from '../../movies-api';

import MovieCast from '../../components/MovieCast/MovieCast';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  // console.log(movieId);
  useEffect(() => {
    async function getMovieById() {
      const result = await fetchMovieById(movieId);
      // console.log(result);
      // console.log(result.data.adult);
      setMovieDetail(result.data);
      // console.log(movieDetail);
    }
    getMovieById();
  }, [movieId]);





  // const [movieCastDetail, setMovieCastDetail] = useState([]);
  // useEffect(() => {
  //   async function getMovieCastById() {
  //     const result = await fetchMovieCastById(movieId);
  //     console.log(result.data.cast);
  //     setMovieCastDetail(result.data.cast)
  //     console.log(movieCastDetail);
  //   }
  //   getMovieCastById();
  // }, [movieId]);

  // const data =  fetchMovieById(movieId);
  //         console.log(data);

  // const product =  fetchMovieById ("932086")
  // console.log(product);
  // console.log(product.data);
  // console.log(movieDetail);
  return (
<section className={css.movieDetailsPageSection}>
  <div className={css.movieDetailsPageContainer}>
    {movieDetail && <MovieDetailsCard data={movieDetail} />
    // <ul>
    //     <li><Link to="cast">Cast</Link></li>
    //     <li><Link to="review">Cast</Link></li>
    // </ul>
    }
  <ul>
    <li>
        {/* <Link to={"cast"}><MovieCast data ={movieCastDetail}/> </Link> */}
             <Link to={"cast"}>ііііі</Link> 
    </li>
    <li>
        <Link to={"reviews"}>bbbb</Link>
    </li>
   
    </ul>

    <Outlet/>

  

    </div>;
</section>
  )
  
}
