import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "f30aff8e88d9o961t06a5249f250f1b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function searchCity(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <div className="row">
            <div className="col-10">
              <form onSubmit={searchCity}>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search City..."
                  className="search-bar"
                  onChange={updateCity}
                />
                <input type="submit" value="Search" className="search-icon" />
              </form>
            </div>
            <div className="col-2">
              <button className="current-location">Current Location</button>
            </div>
          </div>
          <WeatherDisplay data={weatherData} />
          <Forecast url={weatherData.imgUrl} city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
