import { useEffect,useState } from 'react';
import { fetchMovieCastById } from '../../movies-api';
import { useParams } from 'react-router-dom';
import MovieCastCard from '../MovieCastCard/MovieCastCard';
import css from "./MovieCast.module.css"

export default function MovieCast() {
 const {movieId}=useParams();

 const [movieCastDetail, setMovieCastDetail] = useState([]);
 useEffect(() => {
   async function getMovieCastById() {
     const result = await fetchMovieCastById(movieId);
     console.log(result.data.cast);
     setMovieCastDetail(result.data.cast)
     
   }
   getMovieCastById();
 }, [movieId]);
 console.log(movieCastDetail);
  return (
    <div>
      <h2>Movie Castaaaaa</h2>
      <ul className={css.movieCastList}>

      {/* {movieCastDetail.map(item =>{
        return (


          
          <li key ={item.id}>
            <div>
            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path
}`} alt="" />
<p>{item.name} as {item.character}`</p>


            </div>
       
        </li>
        )
       
      })} */}

{movieCastDetail.map(item=>{
  return (

    <li key ={item.id}>

      <MovieCastCard
      item ={item}
      />
    </li>
  )

  
  })}

      </ul>

    </div>
  );
}
