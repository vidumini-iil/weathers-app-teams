import * as React from "react";
import styles from "./styles.module.css";
import { getCities } from "./components/city/city";

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>test : {text}</div>;
};

export { getContryList, getCityList } from "./api/search";
export {getCities};
