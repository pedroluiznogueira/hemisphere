import React, { Component } from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";
import "./index.css";

interface IProps {}

interface IState {
  latitude: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { latitude: 0 };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => console.error(error)
    );
  }

  render() {
    if (this.state.latitude) {
      return (
        <>
          <div>latitude: {this.state.latitude}</div>
        </>
      );
    } else {
      return (
        <>
          <div>latitude: First time rendering...</div>
        </>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
