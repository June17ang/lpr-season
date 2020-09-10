import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.long && !this.state.lat) {
      return (
        <div>
          <em>Error :{this.state.errorMessage}</em>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.long && this.state.lat) {
      return (
        <div>
          <div>Latitube: {this.state.lat}</div>
          <div>Longtitube: {this.state.long}</div>
        </div>
      );
    }

    return <div>Loading ...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
