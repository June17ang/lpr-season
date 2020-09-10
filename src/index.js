import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //create a helper function
  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="error-msg">
          <em>Error :{this.state.errorMessage}</em>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please allow location request" />;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
