
import React, { useEffect,useState } from "react";
import './app.css';
import searchIcon from './search.svg';
import MovieCard from './movie.jsx';
//e21b8e79

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e21b8e79';

function App(){
  const [movies, setMovies] = useState([]);
  const [value,setValue] = useState('')
  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`,{
      method : 'GET',
      mode : 'cors',
    });
    const data = await response.json()
    setMovies(data.Search)
  };

  useEffect(()=>{
    searchMovies('batman');
  },[])

  return(
    <div className="app">
      <h1>FindMovies</h1>
      <div className="search">
        <input placeholder="Search for movies" value={value} onChange={(e) => {
           setValue(e.target.value);
        }}/>
        <img src={searchIcon} alt="search" onClick={() => {
          searchMovies(value)
        }}/>
      </div>
  
      {
        movies.length > 0 ? (
          <div className="container">
            {
              movies.map((movie)=>(
                <MovieCard key = {movies.indexOf(movie)} movie = {movie}/>
              ))
            }
         </div>
        ) : (
          <div className="empty">
            <h2>Movie not found</h2>
            </div>
        )
      }


    </div>
  )
}

export default App