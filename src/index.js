import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40,
      long: 10,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return (
      <div>
        <div>Latitube: {this.state.lat}</div>
        <div>Longtitube: {this.state.long}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
