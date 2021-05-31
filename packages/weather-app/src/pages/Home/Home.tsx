import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar";

function Home() {

    return (
        <div className="home-wrapper">
            <div className="top-bar">
                <TopBar />
                <SearchBar />
                <Cards />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
