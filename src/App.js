import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Movies/Search';
import MovieList from './Movies/Movielist';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=aa59f99ef4870f4b5cd3ac2792d7a345&query=${query}`
      );
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <header> 
       
        <h1>
          <img src='https://i.gifer.com/GYH4.gif' alt=""></img>
          Movie Search</h1>
      </header><br></br>
      <br></br>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
 