import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { CityItemProp } from "../../interfaces/Icontry";
import { getWeatherIcon } from "../functions/GetWeatherIcon";
import { timeConverter, sunTimeConverter } from "../functions/timeConverter";

import WeatherIcon1 from "../../images/Layer-1-7.png";
import WeatherIcon2 from "../../images/Layer-1-3.png";
import WeatherIcon3 from "../../images/Layer-1-6.png";
import WeatherIcon4 from "../../images/Layer-1-5.png";
import WeatherIcon5 from "../../images/Layer-1-4.png";
import closwIcon from "../../images/Background.png";
import degreeIcon from "../../images/Layer-1-8.png";

import "./CityBucket.css";

function CityBucket(props: CityItemProp) {
  const cityName = props.city.name;
  const visibility = props.city.visibility / 1000;

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
