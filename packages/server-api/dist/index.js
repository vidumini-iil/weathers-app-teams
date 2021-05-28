var React = require('react');

<<<<<<< HEAD
var styles = {"test":"_styles-module__test__3ybTi"};

var ApiIdCity = "cdd9baf674d2a4f1a402cf0d5655c4ee";

var Data = {
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

var getCities = function getCities() {
  try {
    var getData = Data.List;
    var loadedCitiesCode = [];

    for (var key in getData) {
      loadedCitiesCode.push(getData[key].CityCode);
    }

    var stringCitiesCode = loadedCitiesCode.join(",");
    console.log("stringCitiesCode ", stringCitiesCode);
    getCurrentWeather(stringCitiesCode);
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

var getCurrentWeather = function getCurrentWeather(data) {
  try {
    var apiUrl = "http://api.openweathermap.org/data/2.5/group?id=" + data + "&units=metric&appid=" + ApiIdCity;
    return Promise.resolve(fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    })).then(function (resData) {
      var payload = resData.list;
      console.log(payload, " payload HwwHHello");
      return payload;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
=======
var styles = {"test":"_3ybTi"};
>>>>>>> f246de0cc6b3edd4cf79d78495560f67789c5cdf

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "test : ", text);
};

exports.ExampleComponent = ExampleComponent;
<<<<<<< HEAD
exports.getCities = getCities;
=======
>>>>>>> f246de0cc6b3edd4cf79d78495560f67789c5cdf
//# sourceMappingURL=index.js.map
