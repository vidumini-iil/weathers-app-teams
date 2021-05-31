import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import WeatherIcon1 from "../../images/Layer-1-7.png";
import WeatherIcon2 from "../../images/Layer-1-3.png";
import WeatherIcon3 from "../../images/Layer-1-6.png";
import WeatherIcon4 from "../../images/Layer-1-5.png";
import WeatherIcon5 from "../../images/Layer-1-4.png";
import closwIcon from "../../images/Background.png";
import degreeIcon from "../../images/Layer-1-8.png";

import "./CityBucket.css";

export interface CityItemProp {
  city: CityItem;
  color: string;
}

export interface CityItem {
  id: number;
  visibility: number;
  name: string;
  sys: SisItem;
  dt: number;
  weather: Array<Type>;
  main: MainItem;
  wind: WindItem;
}

export interface SisItem {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Type {
  description: string;
}

export interface MainItem {
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  temp: number;
}

export interface WindItem {
  speed: number;
  deg: number;
}

function CityBucket(props: CityItemProp) {
  const cityId = props.city.id;
  const cityName = props.city.name;
  const visibility = props.city.visibility / 1000;

  const getWeatherIcon = (initialWheather: string) => {
    switch (initialWheather) {
      case "overcast clouds":
        return WeatherIcon1;
      case "few clouds":
        return WeatherIcon5;
      case "mist":
        return WeatherIcon2;
      case "broken clouds":
        return WeatherIcon3;
      case "light rain":
        return WeatherIcon5;
      case "clear sky":
        return WeatherIcon4;
      default:
        return WeatherIcon1;
    }
  };

  const timeConverter = (UNIX_timestamp: number) => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();

    let time: string = hour + ":" + min;

    let times: Array<string> = time.split(":");
    let meridiemTime =
      (parseInt(times[0]) >= 12 &&
        (parseInt(times[0]) - 12 || 12) + ":" + times[1] + "pm") ||
      (Number(times[0]) || 12) + ":" + times[1] + "am";

    let timeDate = meridiemTime + ", " + month + " " + date;
    return timeDate;
  };

  const sunTimeConverter = (UNIX_timestamp: number) => {
    let a = new Date(UNIX_timestamp * 1000);

    let hour = a.getHours();
    let min = a.getMinutes();

    let time: string = hour + ":" + min;

    let times: Array<string> = time.split(":");
    let meridiemTime =
      (parseInt(times[0]) >= 12 &&
        (parseInt(times[0]) - 12 || 12) + ":" + parseInt(times[1]) + "pm") ||
      (Number(times[0]) || 12) + ":" + times[1] + "am";

    return meridiemTime;
  };

  return (
    <div className="child">
      <Link to={`/city/${cityName}`}>
        <div className="top-bar" style={{ backgroundColor: props.color }}>
          <div className="town two-common">
            <h3>
              {props.city.name}, {props.city.sys.country}
            </h3>
            <p>{timeConverter(props.city.dt)}</p>
            <div>
              <img
                src={getWeatherIcon(props.city.weather[0].description)}
                className="wheather-icon"
                alt="wheather-icon"
              />
              <span className="wheather-text">
                {props.city.weather[0].description}
              </span>
            </div>
          </div>
          <div className="status two-common">
            <img src={closwIcon} className="close-icon" alt="close-icon" />
            <h2>{props.city.main.temp}°C</h2>
            <p>Temp Min: {props.city.main.temp_min}°C</p>
            <p>Temp Max: {props.city.main.temp_max}°C</p>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="pressure three-common">
            <div className="three-common-wrapper">
              <p>Pressure: {props.city.main.pressure}Pa</p>
              <p>Humaidity: {props.city.main.humidity}%</p>
              <p>Visibility: {visibility}km</p>
            </div>
          </div>
          <div className="degree three-common">
            <div className="three-common-wrapper">
              <img src={degreeIcon} className="degree-icon" alt="degree-icon" />
              <p>
                {props.city.wind.speed}m/s {props.city.wind.deg} Degree
              </p>
            </div>
          </div>
          <div className="sunrise three-common">
            <div className="three-common-wrapper">
              <p>Sunrise: {sunTimeConverter(props.city.sys.sunrise)}</p>
              <p>Sunset: {sunTimeConverter(props.city.sys.sunset)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CityBucket;
