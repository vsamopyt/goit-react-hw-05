import {Link} from "react-router-dom"
import css from "./MovieCard.module.css"
export default function MovieCard ({ item }) {
  const { title, id, backdrop_path, poster_path, vote_average,vote_count, release_date
    } = item;
    const releaseYear = release_date.slice(0,4)
    // console.log(releaseYear);
  return (
    <>

    {/* <Link to ="/movies/:movieId"><p>{title}</p></Link> */}
     <Link to ={`/movies/${id}`}><img src ={ `https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} /></Link>
     <div className={css.movieCardRatingContainer}>
     <span>Rating:</span> <span>{vote_average}</span>
        {/* <span>{vote_count}</span> */}
     </div>
     <div className={css.movieCardYearContainer}>
     <span>Release year:</span> <span>{releaseYear}</span>
        {/* <span>{vote_count}</span> */}
     </div>
    {/* <img src ={ `https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} /> */}
  
      {/* <p>{title}</p> */}
    </>
  );
}
