import React from 'react';
import { render } from 'react-dom';
// must keep the import react for jsx because its getting transpiled to React.createElement

const MyTitle = function(props) {
  // return (
  //   ce('div', null,
  //     ce('h1', { style: { color: props.color } }, props.title)
  //   )
  // )
  // below is transpiled to look like above
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
  // jsx to look more like mark up
  // outer {} means jsx and inner means expression
  // () means js im not done yet go to next line
  // need trailing slash to close jsx
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YelloGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="House of Cards" color="Peru" />
      <MyTitle title="The Americans" color="burlywood" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
