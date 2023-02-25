import { Weather } from "../types";
import classes from "./WeatherCard.module.css";

export type WeatherCardProps = Weather & {
  onClickHandler?: (e: React.MouseEvent<HTMLElement>) => void;
};

export const WeatherCard = ({
  temp,
  feelsLike,
  humidity,
  tempMin,
  tempMax,
  icon,
  city,
  onClickHandler,
}: WeatherCardProps) => {
  const getIconLink = (icon: string) =>
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className={classes["weather-card"]} onClick={onClickHandler}>
      <div className={classes.icon}>
        <h4>{city}</h4>
        <img src={getIconLink(icon)} alt="weather" />
      </div>
      <div>
        <p>Temperature: {temp} °C</p>
        <p>Feels like: {feelsLike} °C</p>
        <p>Low: {tempMin} °C</p>
        <p>High: {tempMax} °C</p>
        <p>Humidity: {humidity} %</p>
      </div>
    </div>
  );
};
