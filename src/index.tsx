import React, { Component } from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";
import "./index.css";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {latitude: null};
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.error(error)
    );

    return (
      <>
        {console.log(this.state)}
        <div>latitude:</div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
