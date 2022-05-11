import React from 'react';

// components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import config from '../config';

function App() {

  const apiKey = config;

  return (
    <div className='container'>

      <SearchForm />

      <Nav />

      <PhotoContainer />

    </div>
  );
}

export default App;
