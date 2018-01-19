import React from 'react';
// same as const React = require('react') ..non es6
import { render } from 'react-dom';

// const App = () => (
//   <div className='app'>
//     <div className='landing'>
//       <h1>svideo</h1>
//       <input type='text' placeholder='Search' />
//       <a>or Browse all</a>
//     </div>
//   </div>
// );
//
// render(<App />, document.getElementById('app'));

const App = () => {
  return ( //if one line then implicit return otherwise you would need return {}
    <div className='app'>
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));
