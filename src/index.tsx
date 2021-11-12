import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';
import './index.css';


const App = () => {
  return (
    <div>
      <HemisphereDisplay />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.querySelector("#root")
)