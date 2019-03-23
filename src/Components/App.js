import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      system: {
        US: { temperature: "", windspeed: "" },
        International: { temperature: "", windspeed: "" }
      },
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

  // unitSystemDetails = () => {
  //   if (this.state.system === "US") {
  //     const selectedTemperature = "F";
  //     const selectedWindspeed = "MP/H";
  //     this.setState({ system: { temperature: selectedTemperature } });
  //     this.setState({ system: { windspeed: selectedWindspeed } });
  //   } else {
  //     const selectedTemperature = "C";
  //     const selectedWindspeed = "KM/H";
  //     this.setState({ system: { temperature: selectedTemperature } });
  //     this.setState({ system: { windspeed: selectedWindspeed } });
  //   }
  // };

  render() {
    console.log(this.state);
    const { windchill } = this.state;
    return (
      <div>
        <div>
          <p>Select metric system, please</p>
          <select onChange={this.onSystemChange}>
            <option value="International">International</option>
            <option value="US">US</option>
          </select>
        </div>
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
        <button onClick={this.windChill}>Calculate</button>
        <span>feels like {windchill}</span>
      </div>
    );
  }
}

export default App;
