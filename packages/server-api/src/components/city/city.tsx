import { ApiIdCity } from "../../api/api";
import { Data } from "./data/Data";

export const getCities = async () => {
  try {
    const getData = Data.List;

    const loadedCitiesCode = [];

    for (const key in getData) {
      loadedCitiesCode.push(getData[key].CityCode);
    }

    const stringCitiesCode = loadedCitiesCode.join(",");
    console.log("stringCitiesCode ", stringCitiesCode);

    const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${stringCitiesCode}&units=metric&appid=${ApiIdCity}`;
    const resData = await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    const payload = resData.list;
    //console.log(payload, " payload HaaHHello");

    return payload;

  } catch (error) {
    console.log(error);
    console.log("error");
    //throw error;
  }
};
