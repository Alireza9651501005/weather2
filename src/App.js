import React, { useState } from "react";

import { fetchWeather } from "./api/FetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async () => {
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery("");
  };

  return (
    <div className="main-container">
      <div className="main22">
        <input
          type="text"
          className="search"
          placeholder="city name ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
      <a href="https://github.com/Alireza9651501005" target='_blank' rel="noreferrer">
        <i class="fab fa-github"></i>
      </a>
    </div>
  );
};

export default App;
