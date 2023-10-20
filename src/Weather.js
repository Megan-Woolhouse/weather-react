import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <div className="row">
            <div className="col-10">
              <form>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search City..."
                  className="search-bar"
                />
                <input type="submit" value="Search" className="search-icon" />
              </form>
            </div>
            <div className="col-2">
              <button className="current-location">Current Location</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <div className="current-emoji">
                <img
                  src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`}
                  alt="Weather-icon"
                  className="current-emoji"
                />
              </div>
              <span className="current">
                <span className="temp">
                  {" "}
                  {Math.round(weatherData.temperature)}{" "}
                </span>

                <div className="unit">°C</div>

                <div className="current-description">
                  {weatherData.description}
                </div>
              </span>
            </div>

            <ul className="col-3 wind-humidity">
              <li>Wind Speed: {weatherData.wind} km/h</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>

            <div className="col-5">
              <h1>{weatherData.city}</h1>
              <div className="date">
                Tuesday
                <br />
                8th
                <br />
                October
              </div>
            </div>
          </div>
          <div className="forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f30aff8e88d9o961t06a5249f250f1b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading...";
  }
}
