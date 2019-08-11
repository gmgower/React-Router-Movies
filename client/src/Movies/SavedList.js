import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span key={props} className="saved-movie">{movie.title}</span>
    ))}
    {/* // * S9 add Link to home. */}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
