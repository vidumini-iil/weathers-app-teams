import React, { Fragment, useState, useEffect } from "react";
import "./Cards.css";
import CityBucket from "../CityBucket/CityBucket";
import {colors} from "../../Data/Colors";

import { getCities } from "server-api";

// console.log(
//   getCities().then((res) => {
//     console.log(res);
//   })
// );

function Cards() {
  const [cities, setCities] = useState([{
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
  }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCities().then((res) => {
      setCities(res);
      console.log(res);
      setLoading(false);
    });
  }, []);

  console.log(cities, " cities cities");

  let recent = loading ? (
    ""
  ) : (
    <Fragment>
      {cities.map((city, index) => (
        <CityBucket key={city.id} city={city} color={colors[index]}/>
      ))}
    </Fragment>
  );

  return <div className="conent-wrapper">{recent}</div>;
}

export default Cards;
