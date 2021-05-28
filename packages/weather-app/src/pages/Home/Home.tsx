import React, { Fragment, useState, useEffect } from "react";

import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

import { getCities } from "server-api";

function Home() {
  const [cities, setCities] = useState();

  useEffect(() => {
    getCities().then((res) => {
      setCities(res);
    });

   
  }, []);

  console.log(cities, "HHHH");
  return (
    <div className="home-wrapper">
      <div className="top-bar">
        <TopBar />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
