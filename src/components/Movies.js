import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div>
          <p>Title: {movie.title}</p>
          <p>RunTime: {movie.time}</p>
          <p>Genres:</p>
          <ul>
          {movie.genres.map(genre => 
            <li>{genre}</li>
            
            )}
            </ul>
          <br/>
        </div>
      )}
    </div>
  );
};

export default Movies;
