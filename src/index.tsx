import React, { Component } from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";
import "./index.css";

interface IProps {}

interface IState {
  latitude: number;
  errorMessage: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { 
      latitude: 0,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude});
      },
      (error) => {
        this.setState({errorMessage: 'Not allowed to fetch the location'});
      }
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
          <div>{this.state.errorMessage}</div>
        </>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
