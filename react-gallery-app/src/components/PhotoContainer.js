import React from 'react';

// components
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

  // variable to use in return method
  let photos;

  // variable contaning props array of objects from flickr
  const results = props.data;

  // if data is loading, display 'loading' text
  if (props.loading) {
    photos = 'Loading...'
  } else {

    // if array has items, map over array and create photo components for each
    if (results.length > 0) {
      photos = results.map(photo =>
        <Photo key={photo.id} alt={photo.title} url={
          `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
      );
    } else {
      // if array is empty, render not found component
      photos = <NotFound />;
    }
  }

  return (
    <div className='photo-container'>
      <h2>{props.query}</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;