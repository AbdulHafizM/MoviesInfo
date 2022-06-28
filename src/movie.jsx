import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div  className="movie">
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img src={movie.poster_path !== null? `https://image.tmdb.org/t/p/original${movie.poster_path}`: "https://via.placeholder.com/400"} alt={movie.Title}/>
            </div>
            <div>
                <span>{`Popularity : ${movie.popularity}`}</span>
                <p>{movie.title}</p>
            </div>
      </div>
    )
}

export default MovieCard

//https://via.placeholder.com/400'