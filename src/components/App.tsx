import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { SearchInput } from "./SearchInput";
import { WeatherCard } from "./WeatherCard";

function App() {
  const weatherData = {
    temp: 306.15, //current temperature
    feels_like: 307.15, //current temperature
    pressure: 1013,
    humidity: 44,
    temp_min: 306, //min current temperature in the city
    temp_max: 306, //max current temperature in the city
  };

  const onSubmit = (city: string) => {
    console.log(city);
  };

  return (
    <div className={classes.app}>
      <h3>Weather App</h3>
      <SearchInput onSubmit={onSubmit} />
      <WeatherCard
        temp={weatherData.temp}
        feelsLike={weatherData.feels_like}
        humidity={weatherData.humidity}
        tempMin={weatherData.temp_min}
        tempMax={weatherData.temp_max}
        icon={"http://openweathermap.org/img/wn/10d@2x.png"}
      />

      <h4>Your last five search entries:</h4>
      <div style={{ display: "flex", gap: "15px" }}>
        <WeatherCard
          temp={weatherData.temp}
          feelsLike={weatherData.feels_like}
          humidity={weatherData.humidity}
          tempMin={weatherData.temp_min}
          tempMax={weatherData.temp_max}
          icon={"http://openweathermap.org/img/wn/10d@2x.png"}
        />
        <WeatherCard
          temp={weatherData.temp}
          feelsLike={weatherData.feels_like}
          humidity={weatherData.humidity}
          tempMin={weatherData.temp_min}
          tempMax={weatherData.temp_max}
          icon={"http://openweathermap.org/img/wn/10d@2x.png"}
        />
        <WeatherCard
          temp={weatherData.temp}
          feelsLike={weatherData.feels_like}
          humidity={weatherData.humidity}
          tempMin={weatherData.temp_min}
          tempMax={weatherData.temp_max}
          icon={"http://openweathermap.org/img/wn/10d@2x.png"}
        />
        <WeatherCard
          temp={weatherData.temp}
          feelsLike={weatherData.feels_like}
          humidity={weatherData.humidity}
          tempMin={weatherData.temp_min}
          tempMax={weatherData.temp_max}
          icon={"http://openweathermap.org/img/wn/10d@2x.png"}
        />
        <WeatherCard
          temp={weatherData.temp}
          feelsLike={weatherData.feels_like}
          humidity={weatherData.humidity}
          tempMin={weatherData.temp_min}
          tempMax={weatherData.temp_max}
          icon={"http://openweathermap.org/img/wn/10d@2x.png"}
        />
      </div>
    </div>
  );
}

export default App;
