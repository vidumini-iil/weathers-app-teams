import { createElement } from 'react';
import axios from 'axios';

var styles = {"test":"_styles-module__test__3ybTi"};

const ApiIdCity = "cdd9baf674d2a4f1a402cf0d5655c4ee";

const Data = {
  "List": [{
    "CityCode": "1248991",
    "CityName": "Colombo",
    "Temp": "33.0",
    "Status": "Clouds"
  }, {
    "CityCode": "1850147",
    "CityName": "Tokyo",
    "Temp": "8.6",
    "Status": "Clear"
  }, {
    "CityCode": "2644210",
    "CityName": "Liverpool",
    "Temp": "16.5",
    "Status": "Rain"
  }, {
    "CityCode": "2988507",
    "CityName": "Paris",
    "Temp": "22.4",
    "Status": "Clear"
  }, {
    "CityCode": "2147714",
    "CityName": "Sydney",
    "Temp": "27.3",
    "Status": "Rain"
  }, {
    "CityCode": "4930956",
    "CityName": "Boston",
    "Temp": "4.2",
    "Status": "Mist"
  }, {
    "CityCode": "1796236",
    "CityName": "Shanghai",
    "Temp": "10.1",
    "Status": "Clouds"
  }, {
    "CityCode": "3143244",
    "CityName": "Oslo",
    "Temp": "-3.9",
    "Status": "Clear"
  }]
};

const getCities = async () => {
  try {
    const getData = Data.List;
    const loadedCitiesCode = [];

    for (const key in getData) {
      loadedCitiesCode.push(getData[key].CityCode);
    }

    const stringCitiesCode = loadedCitiesCode.join(",");
    console.log("stringCitiesCode ", stringCitiesCode);
    const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${stringCitiesCode}&units=metric&appid=${ApiIdCity}`;
    const resData = await fetch(apiUrl).then(response => response.json()).then(data => {
      return data;
    });
    const payload = resData.list;
    return payload;
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

let source;
const getContryList = () => {
  return axios("https://restcountries.eu/rest/v2/all").then(res => {
    const list = res.data.map(value => ({
      name: value.name,
      countryCode: value.alpha2Code.toLowerCase()
    }));
    return list;
  }).catch(error => error);
};
const getCityList = (serachText, countryCode) => {
  if (source) {
    source.cancel();
  }

  source = axios.CancelToken.source();
  return axios.get("https://api.geoapify.com/v1/geocode/autocomplete", {
    cancelToken: source.token,
    params: {
      text: serachText,
      filter: `countrycode:${countryCode}`,
      type: "city",
      apiKey: "bf0cfe45ea014b5ab6b22c3b84e2e515"
    }
  });
};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "test : ", text);
};

export { ExampleComponent, getCities, getCityList, getContryList };
//# sourceMappingURL=index.modern.js.map
