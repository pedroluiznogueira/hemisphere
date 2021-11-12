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
    this.state = { latitude: 25 };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => console.error(error)
    );
  }

  render() {
    return (
      <>
        {this.state.latitude}
        <div>latitude:</div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
