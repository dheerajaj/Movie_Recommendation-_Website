import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""></img>
            <br></br>
          <h2> {movie.title}</h2>
          <br></br>
          <p>Overview:- {movie.overview}</p><br></br>
          <p>Release Date:- {movie.release_date}</p>
          <p>Popularity:- {movie.popularity}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
