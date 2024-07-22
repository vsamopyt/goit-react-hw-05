import { Link } from 'react-router-dom';
import css from "./MovieDetailsCard.module.css"
export default function MovieDetailsCard({ data }) {
  const { imdb_id, overview, backdrop_path, title, genres, release_date, origin_country,vote_average,runtime
  } = data;

 
  const releaseYear = release_date.slice(0,4)
  console.log(releaseYear);
  return (
    <div>
      {/* <Link to="/">go back</Link> */}

      <header>
        <h1 className={css.movieDetailsCardTitle}>{`${title} (${releaseYear})`}</h1>
        <ul className={css.movieDetailsCardList}>
          <li> <span>Country: </span>
          <span>{origin_country}</span></li>
          <li><span>Rating: </span>
          <span>{vote_average}</span></li>
          <li>  <span>Runtime: </span>
          <span>{runtime} min.</span></li>
          
        </ul>
        {/* <div>
          <span>country:</span>
          <span>{origin_country}</span>
        </div>

     
        <div>
        
        </div>
        <div>
          <span>runtime:</span>
          <span>{runtime} nin</span>
        </div> */}
        {/* <p>counntryspan</p> */}
      </header>
      <main>
        <div>
            <div>

          {/* <p>{imdb_id}</p> */}
          <p className={css.movieDetailsCardOverview}>{overview}</p>

            </div>
            <div className={css.movieDetailsCardImgContainer}>
                
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt=""
          />
            </div>
        </div>
      </main>
    </div>
  );
}
