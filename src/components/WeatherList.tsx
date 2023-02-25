import { Weather } from "../types/index";
import { WeatherCard } from "./WeatherCard";
import classes from "./LastFive.module.css";
export type LastFiveProps = {
  weatherList?: Weather[];
  onClickHandler: (val: string) => void;
};

export const WeatherList = ({ weatherList, onClickHandler }: LastFiveProps) => {
  if (!weatherList || !weatherList.length) return null;

  return (
    <>
      <h4>Your last {weatherList.length} search entries:</h4>
      <div className={classes["last-five"]}>
        {weatherList.map((w: Weather, index) => (
          <WeatherCard
            temp={w.temp}
            feelsLike={w.feelsLike}
            humidity={w.humidity}
            tempMin={w.tempMin}
            tempMax={w.tempMax}
            icon={w.icon}
            city={w.city}
            onClickHandler={() => {
              onClickHandler(w.city);
            }}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
