import React, { Component } from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";
import "./index.css";

class App extends React.Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.error(error)
    );

    return <div>latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
