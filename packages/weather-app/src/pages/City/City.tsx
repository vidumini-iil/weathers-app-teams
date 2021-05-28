import React, { Fragment, useState, useEffect } from "react";
import * as H from "history";

import { match } from "react-router-dom";
import "./City.css";
import { getCity } from "server-api";

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
  const [city, setCity] = useState();

  useEffect(() => {
    //console.log(props.match.params.cityName, "LLLLL");
    //console.log(typeof(props.match.params.cityName));
    //console.log(props.match?.params.cityName, " match.params.id")
    getCity(props.match.params.city).then((res) => {
      setCity(res);
    });

    const interval = setInterval(() => {
      getCity(props.match.params.city).then((res) => {
        setCity(res);
      });
    }, 150000);

    return () => clearInterval(interval);
  }, []);

  console.log(city, " city DDDD");

  return (
    <div className="city-wrapper">
      <h1>City</h1>
    </div>
  );
}

export default City;
