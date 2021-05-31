import React, { Fragment, useState, useEffect } from "react";
import * as H from "history";
import { match } from "react-router-dom";

import { getCity } from "server-api";
import { CityWheather } from "../../components/CityWheather/CityWheather";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import "./City.css";

type CityIdentifyProps<P> = {
  match: matchh<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
};

export interface matchh<P> {
  params: matchCity;
  isExact: boolean;
  path: string;
  url: string;
}
export interface matchCity {
  city: string;
}

function City<P>(props: CityIdentifyProps<P>) {
  const [city, setCity] = useState({
    id: 0,
    visibility: 0,
    name: "",
    sys: { country: "", sunrise: 0, sunset: 0 },
    dt: 0,
    weather: [{ description: "" }],
    main: {
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      temp: 0,
    },
    wind: {
      speed: 0,
      deg: 0,
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(props.match.params.cityName, "LLLLL");
    //console.log(typeof(props.match.params.cityName));
    //console.log(props.match?.params.cityName, " match.params.id")
    setLoading(true);
    getCity(props.match.params.city).then((res) => {
      setCity(res);
      setLoading(false);
    });

    // const interval = setInterval(() => {
    //   getCity(props.match.params.city).then((res) => {
    //     setCity(res);
    //     setLoading(false);
    //   });
    // }, 150000);

    // return () => clearInterval(interval);
  }, []);

  let recent = loading ? (
    ""
  ) : (
    <Fragment>
      <CityWheather key={city.id} city={city} />
    </Fragment>
  );

  console.log(city, " city DDDD");

  return (
    <Fragment>
      <div className="city-wrapper">
        <TopBar />
        <div className="city-content-wrapper">{recent}</div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default City;
