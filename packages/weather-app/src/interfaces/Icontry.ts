export interface IContry {
    name: string;
    countryCode: string;
}

export interface CityItemProps {
    city: CityItem;
}

export interface CityItem {
    visibility: number;
    name: string;
    sys: SisItem;
    id?: number;
    dt: number;
    weather: Array<Type>;
    main: MainItem;
    wind: WindItem;
}

export interface SisItem {
    country: string;
    sunrise: number;
    sunset: number;
}

export interface Type {
    description: string;
}

export interface MainItem {
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    temp: number;
}

export interface WindItem {
    speed: number;
    deg: number;
}

export interface CityItemProp {
    city: CityItem;
    color: string;
}

  
  