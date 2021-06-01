import WeatherIcon1 from "../../images/Layer-1-7.png";
import WeatherIcon2 from "../../images/Layer-1-3.png";
import WeatherIcon3 from "../../images/Layer-1-6.png";
import WeatherIcon4 from "../../images/Layer-1-5.png";
import WeatherIcon5 from "../../images/Layer-1-4.png";

export const getWeatherIcon = (initialWheather: string) => {
  switch (initialWheather) {
    case "overcast clouds":
      return WeatherIcon1;
    case "few clouds":
      return WeatherIcon5;
    case "mist":
      return WeatherIcon2;
    case "broken clouds":
      return WeatherIcon3;
    case "light rain":
      return WeatherIcon5;
    case "clear sky":
      return WeatherIcon4;
    default:
      return WeatherIcon1;
  }
};
