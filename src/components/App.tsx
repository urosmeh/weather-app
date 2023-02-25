import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { WeatherList } from "./WeatherList";
import { SearchInput } from "./SearchInput";
import { WeatherCard } from "./WeatherCard";

export type Weather = {
  feelsLike: number;
  humidity: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  icon: string;
  city: string;
};

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [lastFive, setLastFive] = useState<Weather[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedValue, setClickedValue] = useState(searchTerm);

  useEffect(() => {
    if (clickedValue) {
      setSearchTerm(clickedValue);
      getWeather(clickedValue);
    }
  }, [clickedValue]);

  const getWeather = async (city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }&units=metric`
    );

    if (res.ok) {
      const data = await res.json();

      setCurrentWeather({
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        icon: data.weather[0].icon,
        city: data.name,
      });

      if (!lastFive && currentWeather) {
        setLastFive([currentWeather]);
        return true;
      }

      if (lastFive && lastFive.length > 4 && currentWeather) {
        let tmp = [];
        for (let i = 1; i < 5; i++) {
          tmp.push(lastFive[i]);
        }
        tmp.push(currentWeather);
        setLastFive(tmp);
        return true;
      }

      if (lastFive && currentWeather) {
        let tmp = lastFive;
        tmp.push(currentWeather);
        setLastFive(tmp);
      }
      return true;
    } else {
      console.log("There's been an error");
    }
    return false;
  };

  const onSubmit = async (city?: string) => {
    if (city) setSearchTerm(city);
    setIsLoading(true);
    await getWeather(searchTerm);
    setSearchTerm("");
    setIsLoading(false);
  };

  return (
    <div className={classes.app}>
      <h3>Weather App</h3>
      <SearchInput
        onSubmit={onSubmit}
        searchTerm={searchTerm}
        searchTermChangeHandler={setSearchTerm}
      />
      {currentWeather && !isLoading ? (
        <WeatherCard
          temp={currentWeather.temp}
          feelsLike={currentWeather.feelsLike}
          humidity={currentWeather.humidity}
          tempMin={currentWeather.tempMin}
          tempMax={currentWeather.tempMax}
          icon={currentWeather.icon}
          city={currentWeather.city}
        />
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Try searching for city</p>
      )}

      <WeatherList weatherList={lastFive} onClickHandler={setClickedValue} />
    </div>
  );
}

export default App;
