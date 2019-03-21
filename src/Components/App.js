import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { system: "US", windspeed: null, temperature: null };
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
    const windChillCalc = Math.round(
      35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16)
    );
    //   (3.71 * Math.pow(wind, 0.5) + 5.81 - 0.25 * wind) *
    //   (temp - 91.4) +
    // 91.4;

    console.log(windChillCalc);
  };

  // converterFtoC = () => {
  //   const InternationalUnits = updatedWindChill;
  //   const updatedWindChill = windChill - (32 * 5) / 9;
  //   console.log(converterFtoC);
  // };

  //const calc = 35.74 + 0.6215 * temperature - 35.75  Match.pow(windspeed,  0.16)  + 0.4275 * userTemperautre * Match.pow(userWindspeed, 0.16)

  render() {
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
        feels like {this.windChill}
      </div>
    );
  }
}

export default App;
