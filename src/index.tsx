import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';
import './index.css';


const App = () => {
  
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.error(error)
  );
  
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