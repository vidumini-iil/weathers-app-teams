import {apiIdCity} from "../../api/api";

import data from "./data/cities-data.json";

export const getCities = () => {
    console.log("Hello World" )
    return("Hello");
    try {
      const getData = data.List;
  
      const loadedCitiesCode = [];
      for (const key in getData) {
        loadedCitiesCode.push(getData[key].CityCode);
      }
  
      const stringCitiesCode = loadedCitiesCode.join(",");
      console.log("stringCitiesCode ", stringCitiesCode);
  
      
      //getCurrentWeather(stringCitiesCode);
    } catch (error) {
      console.log(error);
      //throw error;
    }
  };
  
  export const getCurrentWeather = (data: string) => {
    return async () => {
      try {
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${data}&units=metric&appid=${apiIdCity}`;
        const resData = await fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            return data;
          });

          const payload = resData.list;
          return payload;
  
      } catch (error) {
        console.log(error);
        //throw error;
      }
    };
  };