import React from "react";
import { useHistory } from "react-router-dom";

import { getWeatherIcon } from "../functions/GetWeatherIcon";
import { timeConverter, sunTimeConverter } from "../functions/timeConverter";

import WeatherIcon1 from "../../images/Layer-1-7.png";
import WeatherIcon2 from "../../images/Layer-1-3.png";
import WeatherIcon3 from "../../images/Layer-1-6.png";
import WeatherIcon4 from "../../images/Layer-1-5.png";
import WeatherIcon5 from "../../images/Layer-1-4.png";
import backIcon from "../../images/back.png";
import degreeIcon from "../../images/Layer-1-8.png";

import "./CityWheather.css";

import { useAppDispatch } from "../../redux/store";
import { setNotification } from "../../redux/slices/notificationSlice";
import { CityItemProps } from "../../interfaces/Icontry";

export function CityWheather(props: CityItemProps) {
  const visibility = props.city.visibility / 1000;
  let history = useHistory();
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setNotification({
        notification: e.target.checked,
        activeCity: props.city.name,
      })
    );
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
          <h2>{props.city.main.temp}??C</h2>
          <p>Temp Min: {props.city.main.temp_min}??C</p>
          <p>Temp Max: {props.city.main.temp_max}??C</p>
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
        <div className="city-notification">
          <span>Add to notification</span>
          <input onChange={onChange} type="checkbox"></input>
        </div>
      </div>
    </div>
  );
}
