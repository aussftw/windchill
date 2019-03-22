import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      system: "US",
      windspeed: null,
      temperature: null,
      windchill: null,
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

      const windChillCalcF =
        Math.round(
          35.74 +
          0.6215 * temp -
          35.75 * Math.pow(wind, 0.16) +
          0.4275 * temp * Math.pow(wind, 0.16)
        )

      this.setState({ windchill: windChillCalcF });
    } else {
      const windChillCalcC = Math.round(
        13.12 + (0.6215 * temp) -
        11.37 * Math.pow(wind, 0.16) +
        (0.3965 * temp * Math.pow(wind, 0, 16))
      )
      this.setState({ windchill: windChillCalcC });
    }

  };

  render() {
    const { windchill } = this.state

    console.log(this.state);
    return (
      <div>
        <form>
          <label>
            <p>Select metric system, please</p>
            <select onChange={this.onSystemChange}>
              <option value="International">International</option>
              <option value="US">US</option>
            </select>
          </label>
        </form>
        <input type="text" name="windspeed" onChange={this.onWindspeedChange} />
        <input
          type="text"
          name="temperature"
          onChange={this.onTemperatureChange}
        />
        <button onClick={this.windChill}>Calculate</button>
        feels like {windchill}
      </div>
    );
  }
}

export default App;
