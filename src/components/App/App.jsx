import { Route, Routes,} from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import Navigation from '../Navigation/Navigation'
import MovieCast from "../MovieCast/MovieCast"
import MovieReviews from "../MovieReviews/MovieReviews."

import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
// import Navigation from '../Navigation/Navigation'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Navigation/>

    <Routes>
  <Route path ="/" element={<HomePage/>}/>
  <Route path ="/movies" element ={<MoviesPage/>}/>
  <Route path ="/movies/:movieId" element ={<MovieDetailsPage/>}> 
  <Route path = "cast" element ={<MovieCast/>}/>
  <Route path = "reviews" element ={<MovieReviews/>}/>
  </Route>
  {/* <Route path = "/movies/:movieId/cast" element ={<MovieCast/>}/>
  <Route path = "/movies/:movieId/reviews" element ={<MovieReviews/>}/> */}
  <Route path ="*" element ={<NotFoundPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
