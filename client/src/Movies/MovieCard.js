import React from 'react';
// import Movie from './Movie'

import { Link } from 'react-router-dom';

const MovieCard = props => {
  console.log('MovieCard', props);

  const movie = props.movie;
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className='save-wrapper'>
        <div className='movie-card'>
          <h2>{title}</h2>
          <div className='movie-director'>
            Director: <em>{director}</em>
          </div>
          <div className='movie-metascore'>
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {/* // * S6 stars was undefined set useState to null to execute the if (!movie) to true  */}
          {stars.map(star => (
            <div key={star} className='movie-star'>
              {star}
            </div>
          ))}
        </div>

        {/* <div onClick={() => props.saveMovie(movie)} className="save-button">Save</div> */}
        <div
          onClick={() => props.addToSavedList(movie)}
          className='save-button'
        >
          Save
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
