function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var axios = _interopDefault(require('axios'));

var styles = {"test":"_styles-module__test__3ybTi"};

var source;
var getContryList = function getContryList() {
  return axios("https://restcountries.eu/rest/v2/all").then(function (res) {
    var list = res.data.map(function (value) {
      return {
        name: value.name,
        countryCode: value.alpha2Code.toLowerCase()
      };
    });
    return list;
  })["catch"](function (error) {
    return error;
  });
};
var getCityList = function getCityList(serachText, countryCode) {
  if (source) {
    source.cancel();
  }

  source = axios.CancelToken.source();
  return axios.get("https://api.geoapify.com/v1/geocode/autocomplete", {
    cancelToken: source.token,
    params: {
      text: serachText,
      filter: "countrycode:" + countryCode,
      type: "city",
      apiKey: "bf0cfe45ea014b5ab6b22c3b84e2e515"
    }
  }).then(function (res) {
    var _res$data;

    var list = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.features.map(function (value) {
      return {
        value: value.properties.city,
        label: value.properties.city
      };
    });
    return list;
  })["catch"](function (error) {
    return error;
  });
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "test : ", text);
};

exports.ExampleComponent = ExampleComponent;
exports.getCityList = getCityList;
exports.getContryList = getContryList;
//# sourceMappingURL=index.js.map
