import React from 'react';

// components
import Photo from './Photo';

function App() {
  return (
    <div className='photo-container'>
      <h2>Results</h2>
      <ul>
        <Photo />
      </ul>
    </div>
  );
}

export default App;
