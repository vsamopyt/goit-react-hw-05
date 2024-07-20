import MovieList from "../../components/MovieList/MovieList";
import {fetchTrendingMovies} from "../../movies-api"
import { useState, useEffect } from "react";
import css from "./HomePage.module.css"




export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([])
useEffect (()=>{
  async function getTrendinMovies () {

    try {
      // setTreningMovies([])
      const data = await fetchTrendingMovies ()
      console.log(data)
      console.log(data.data.results);
      setTrendingMovies(data.data.results)
      
    } catch (error) {
      // console.log(error);
    }

  }
  getTrendinMovies()
  console.log(trendingMovies);

},[])


  return (
    <section className={css.section}>
      <div className={css.homePageContainer}>
      <h1 className={css.homePageTitle}>Top rated movies</h1>
     {trendingMovies.length > 0 && <MovieList
     array = {trendingMovies}
     /> }
      </div>
    </section>
  );
}
