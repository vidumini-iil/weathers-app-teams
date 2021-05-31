import React from "react";
import { useHistory } from "react-router-dom";

import WeatherIcon1 from "../../images/Layer-1-7.png";
import WeatherIcon2 from "../../images/Layer-1-3.png";
import WeatherIcon3 from "../../images/Layer-1-6.png";
import WeatherIcon4 from "../../images/Layer-1-5.png";
import WeatherIcon5 from "../../images/Layer-1-4.png";
import backIcon from "../../images/back.png";
import degreeIcon from "../../images/Layer-1-8.png";

import "./CityWheather.css";

export interface CityItemProps {
  city: CityItem;
}

export interface CityItem {
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

export function CityWheather(props: CityItemProps) {
  const visibility = props.city.visibility / 1000;
  let history = useHistory();

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

    let time = hour + ":" + min;

    let times: Array<string> = time.split(":");
    let meridiemTime =
      (parseInt(times[0]) >= 12 &&
        (parseInt(times[0]) - 12 || 12) + ":" + times[1] + "pm") ||
      (Number(times[0]) || 12) + ":" + times[1] + "am";

    return meridiemTime;
  };

  return (
    <div className="city-child">
      <div className="city-title">
        <h3>
          {props.city.name}, {props.city.sys.country}
        </h3>
        <p>{timeConverter(props.city.dt)}</p>
        <img
          src={backIcon}
          className="city-back-icon"
          onClick={() => history.goBack()}
          alt="city-back-icon"
        />
      </div>
      <div className="city-top-bar">
        <div className="city-town city-two-common">
          <div className="city-town-w">
            <img
              src={getWeatherIcon(props.city.weather[0].description)}
              className="city-wheather-icon"
              alt="city-wheather-icon"
            />
            <span className="city-wheather-text">
              {props.city.weather[0].description}
            </span>
          </div>
        </div>
        <div className="city-status city-two-common">
          <h2>{props.city.main.temp}°C</h2>
          <p>Temp Min: {props.city.main.temp_min}°C</p>
          <p>Temp Max: {props.city.main.temp_max}°C</p>
        </div>
      </div>

      <div className="city-bottom-bar">
        <div className="city-pressure city-three-common">
          <div className="city-three-common-wrapper">
            <p>Pressure: {props.city.main.pressure}Pa</p>
            <p>Humaidity: {props.city.main.humidity}%</p>
            <p>Visibility: {visibility}km</p>
          </div>
        </div>
        <div className="city-degree city-three-common">
          <div className="city-three-common-wrapper">
            <img
              src={degreeIcon}
              className="city-degree-icon"
              alt="city-degree-icon"
            />
            <p>
              {props.city.wind.speed}m/s {props.city.wind.deg} Degree
            </p>
          </div>
        </div>
        <div className="city-sunrise city-three-common">
          <div className="city-three-common-wrapper">
            <p>Sunrise: {sunTimeConverter(props.city.sys.sunrise)}</p>
            <p>Sunset: {sunTimeConverter(props.city.sys.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
