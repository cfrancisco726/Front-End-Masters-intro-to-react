import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
  <div className='search'>
    { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */ }
    {preload.shows.map( show => <ShowCard show={show} />)}(

  </div>
);

export default Search;
