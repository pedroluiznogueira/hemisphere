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
  }

  // executed only one time when the component gets rendered, load data
  componentDidMount() {
    console.log("component did mount");

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude});
      },
      (error) => {
        this.setState({errorMessage: 'Not allowed to fetch the location'});
      }
    );
  }

  // executed every time props or state changes, load data after state is updated
  componentDidUpdate() {
    console.log("component did update");
  }

  // used for removing the component from the screen
  componentWillUnmount() {

  }

  render() {
    if (this.state.latitude) {
      return (
        <>
          <div>latitude: {this.state.latitude}</div>
        </>
      );
    } else if (this.state.errorMessage) {
      return (
        <>
          <div>{this.state.errorMessage}</div>
        </>
      );
    } else {
      return (
        <>
          <div>Loading...</div>
        </>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
