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
      windchill: null,
      showResult: false
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

      this.setState({ windchill: windChillCalc, showResult: true });
    } else {
      const windChillCalc = Math.round(
        15.12 +
          0.6215 * temp -
          11.37 * Math.pow(wind, 0.16) +
          0.3965 * temp * Math.pow(wind, 0, 16)
      );
      this.setState({ windchill: windChillCalc });
      this.setState({ showResult: true });
    }
  };

  renderResult() {
    const { windchill } = this.state;
    if (this.state.system === "US") {
      return (
        <span>
          feels like{" "}
          <div className="number">
            {windchill}
            <span className="unit_system">&#8457;</span>
            <i className="thermometer half icon" />
          </div>
        </span>
      );
    } else {
      return (
        <span>
          feels like{" "}
          <div className="number">
            {windchill}
            <span className="unit_system">&#8451;</span>
            <i className="thermometer half icon" />
          </div>
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
            <h1 className="app_title">Windchill calculator</h1>
            <p>Select metric system, please</p>
            <select onChange={this.onSystemChange}>
              <option value="International">International</option>
              <option value="US">US</option>
            </select>
          </div>
          <div className="inputs">
            <input
              className="input"
              type="number"
              placeholder="Wind speed"
              onChange={this.onWindspeedChange}
              required
            />
            <input
              className="input"
              type="number"
              placeholder="Temperature"
              onChange={this.onTemperatureChange}
              required
            />
          </div>
          <button className="calc" onClick={this.windChill}>
            Calculate
          </button>
          <div>
            {this.state.showResult ? (
              <div className="result">{this.renderResult()}</div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
