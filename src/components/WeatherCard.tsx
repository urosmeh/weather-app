import classes from "./WeatherCard.module.css";

export type WeatherCardProps = {
  temp: number;
  feelsLike: number;
  humidity: number;
  tempMin: number;
  tempMax: number;
  icon: string;
};

export const WeatherCard = ({
  temp,
  feelsLike,
  humidity,
  tempMin,
  tempMax,
  icon,
}: WeatherCardProps) => {
  return (
    <div className={classes["weather-card"]}>
      <div className={classes.icon}>
        <img src={icon} alt="weather" />
      </div>
      <div>
        <p>Temperature: {temp}</p>
        <p>Feels like: {feelsLike}</p>
        <p>Low: {tempMin}</p>
        <p>High: {tempMax}</p>
        <p>Humidity: {humidity} %</p>
      </div>
    </div>
  );
};
