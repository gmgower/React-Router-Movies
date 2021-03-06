import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard.js'


const Movie = (props) => {
  const [movie, setMovie] = useState(null); // empty object is truthy add null for falsey  
  console.log("Movie", props)
  console.log(props.match.params.id)

  
  const id = props.match.params.id;

  useEffect(() => {
    // * S7 Match method link id from the URL
    // * const id = props.match.params.id;  // move out of useEffect function due to scope
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

        // * S8 Add id to dependency array
  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie}  {...props}  />
  /* <MovieCard movie={movie} render={props => <Movie {...props} saveMovie={saveMovie} /> }  /> */
  
  )
  // const { title, director, metascore, stars } = movie;
  // return (
  //   <div className="save-wrapper">
  //     <div className="movie-card">
  //       <h2>{title}</h2>
  //       <div className="movie-director">
  //         Director: <em>{director}</em>
  //       </div>
  //       <div className="movie-metascore">
  //         Metascore: <strong>{metascore}</strong>
  //       </div>
  //       <h3>Actors</h3>

  //       {/* // * S6 stars was undefined set useState to null to execute the if (!movie) to true  */} 
  //       {stars.map(star => (
  //         <div key={star} className="movie-star">
  //           {star}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="save-button">Save</div>
  //   </div>
  // );
}

export default Movie;
