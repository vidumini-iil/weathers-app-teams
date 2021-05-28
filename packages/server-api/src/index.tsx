import * as React from "react";
import styles from "./styles.module.css";
import {getCities} from "./components/city/city";

interface Props {
    text: string;
}

export const ExampleComponent = ({ text }: Props) => {
    return <div className={styles.test}>test : {text}</div>;
};

<<<<<<< HEAD
export { getContryList, getCityList } from "./api/search";
=======
export {getCities};
>>>>>>> 6ce55664c18227fc8285d3e7b891f0cd976c23e6
