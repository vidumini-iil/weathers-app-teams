import { createElement } from 'react';

<<<<<<< HEAD
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

const getCities = () => {
  try {
    const getData = Data.List;
    const loadedCitiesCode = [];

    for (const key in getData) {
      loadedCitiesCode.push(getData[key].CityCode);
    }

    const stringCitiesCode = loadedCitiesCode.join(",");
    console.log("stringCitiesCode ", stringCitiesCode);
    getCurrentWeather(stringCitiesCode);
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

const getCurrentWeather = async data => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${data}&units=metric&appid=${ApiIdCity}`;
  const resData = await fetch(apiUrl).then(response => response.json()).then(data => {
    return data;
  });
  const payload = resData.list;
  console.log(payload, " payload HwwHHello");
  return payload;
};

const ExampleComponent = ({
  text
}) => {
=======
var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
>>>>>>> f246de0cc6b3edd4cf79d78495560f67789c5cdf
  return createElement("div", {
    className: styles.test
  }, "test : ", text);
};

<<<<<<< HEAD
export { ExampleComponent, getCities };
=======
export { ExampleComponent };
>>>>>>> f246de0cc6b3edd4cf79d78495560f67789c5cdf
//# sourceMappingURL=index.modern.js.map
