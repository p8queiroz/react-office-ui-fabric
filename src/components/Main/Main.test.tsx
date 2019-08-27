import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import Main from './Main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 
