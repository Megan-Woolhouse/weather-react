import "./App.css";

function App() {
  let weatherData = {
    city: "Northampton",
    temperature: 19,
    day: "Tuesday",
    date: "8th",
    month: "October",
    imgUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    description: "heavy intensity shower rain",
    wind: 4,
    humidity: 80,
  };
  return (
    <div className="App">
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

          <div className="col-4">
            <div className="current-emoji">
              <img
                src={weatherData.imgUrl}
                alt="Weather-icon"
                className="current-emoji"
              />
            </div>
            <span className="current">
              <span> {weatherData.temperature} </span>

              <div className="unit">°C</div>

              <div className="current-description">
                {weatherData.description}
              </div>
            </span>
          </div>

          <div className="col-3 wind-humidity">
            <p>Wind Speed: {weatherData.wind} km/h</p>
            <p>Humidity: {weatherData.humidity}%</p>
          </div>

          <div className="col-5">
            <h1>{weatherData.city}</h1>
            <div className="date">
              {weatherData.day}
              <br />
              {weatherData.date}
              <br />
              {weatherData.month}
            </div>
          </div>
        </div>
        <div className="forecast"></div>
      </div>
      <p className="code-link">
        <a href="https://github.com/Megan-Woolhouse/weather-app">
          Open-source code
        </a>
        by Megan Woolhouse
      </p>
    </div>
  );
}

export default App;
