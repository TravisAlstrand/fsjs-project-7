import React from 'react';

// components
import Nav from './Nav';
import Photo from './Photo';

function App() {
  return (
    <div className='container'>

      <Nav />

      <div className='photo-container'>
        <h2>Results</h2>
        <ul>
          <Photo />
        </ul>
      </div>
      
    </div>
  );
}

export default App;
