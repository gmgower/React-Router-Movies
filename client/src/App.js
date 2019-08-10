import React, { useState } from 'react';
// * S2 import Route
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* // * S3 Create two routes MoviesList component and /movies/:id */}
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie} />
    </div>
  );
};

export default App;
