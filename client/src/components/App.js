import React, { Component } from 'react';
import WeatherWidget from '../containers/weather-widget';

export default class App extends Component {

  render() {
    return (
      <div>
        <WeatherWidget  />
      </div>
    )
  }
}
