
import React, { useEffect,useState } from "react";
import './app.css';
import searchIcon from './search.svg';
import MovieCard from './movie.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "./pagination";
//e21b8e79

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e21b8e79';

function App(){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [value,setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(4);

  const indexOfLastCard = currentPage * cardPerPage
  const indexOfFirstCard = indexOfLastCard - cardPerPage
  const currentCards = movies.slice(indexOfFirstCard, indexOfLastCard)
  
  const paginate = (pageNumber) => {setCurrentPage(pageNumber)}


  const searchMovies = async (title) => {
    setLoading(true)
    const response = await fetch(`${API_URL}&s=${title}`,{
      method : 'GET',
      mode : 'cors',
    });
    const data = await response.json()
    setLoading(false)
    setMovies(data.Search)
  };

  useEffect(()=>{
    searchMovies('batman');
  },[])

  return(
    <div className="app">
      <h1>MOVIE INFO</h1>
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
              loading ? (
                  <div className="loader">
                    <CircularProgress />
                  </div>
                ): currentCards.map((movie)=>(
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
      
      {
                  <Pagination 
                      cardPerPage={cardPerPage} 
                      totalCards={movies.length} 
                      paginate={paginate}
                  />
              }
    </div>
  )
}

export default App