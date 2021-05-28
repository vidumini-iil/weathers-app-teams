/// <reference types="react" />
import { getCities } from "./components/city/city";
interface Props {
    text: string;
}
export declare const ExampleComponent: ({ text }: Props) => JSX.Element;
export { getContryList, getCityList } from "./api/search";
export { getCities };
