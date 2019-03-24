import React from "react";

import "./App.css";
import Footer from "./footer/footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      system: "US",
      windspeed: null,
      temperature: null,
      windchill: null
    };
  }

  onSystemChange = event => {
    this.setState({ system: event.target.value });
  };

  onWindspeedChange = event => {
    this.setState({ windspeed: event.target.value });
  };

  onTemperatureChange = event => {
    this.setState({ temperature: event.target.value });
  };

  windChill = () => {
    const temp = this.state.temperature;
    const wind = this.state.windspeed;

    if (this.state.system === "US") {
      const windChillCalc = Math.round(
        35.74 +
          0.6215 * temp -
          35.75 * Math.pow(wind, 0.16) +
          0.4275 * temp * Math.pow(wind, 0.16)
      );

      this.setState({ windchill: windChillCalc });
    } else {
      const windChillCalc = Math.round(
        15.12 +
          0.6215 * temp -
          11.37 * Math.pow(wind, 0.16) +
          0.3965 * temp * Math.pow(wind, 0, 16)
      );
      this.setState({ windchill: windChillCalc });
    }
  };

  renderResult() {
    const { windchill } = this.state;
    if (this.state.system === "US") {
      return (
        <span>
          {" "}
          feels like {windchill}
          <span>&#8457;</span>{" "}
        </span>
      );
    } else {
      return (
        <span>
          {" "}
          feels like {windchill}
          <span>&#8451;</span>
        </span>
      );
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="container">
          <div className="metric_selector">
            <h1>Windchill calculator</h1>
            <p>Select metric system, please</p>
            <select onChange={this.onSystemChange}>
              <option value="International">International</option>
              <option value="US">US</option>
            </select>
          </div>
          <div className="inputs">
            <input
              type="number"
              placeholder="Wind speed"
              onChange={this.onWindspeedChange}
              required
            />
            <label htmlFor="wind-speed" className="inline-label">
              {this.state.windspeed}
            </label>
            <input
              type="number"
              placeholder="Temperature"
              onChange={this.onTemperatureChange}
              required
            />
          </div>
          <button onClick={this.windChill}>Calculate</button>
          {this.renderResult()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
