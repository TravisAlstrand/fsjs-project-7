import React from 'react';

// components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

function App() {
  return (
    <div className='container'>

      <SearchForm />

      <Nav />

      <PhotoContainer />

    </div>
  );
}

export default App;
