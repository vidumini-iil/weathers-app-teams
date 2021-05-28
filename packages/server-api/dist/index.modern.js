import { createElement } from 'react';
import axios from 'axios';

var styles = {"test":"_styles-module__test__3ybTi"};

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
  }).then(res => {
    var _res$data;

    const list = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.features.map(value => ({
      value: value.properties.city,
      label: value.properties.city
    }));
    return list;
  }).catch(error => error);
};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "test : ", text);
};

export { ExampleComponent, getCityList, getContryList };
//# sourceMappingURL=index.modern.js.map
