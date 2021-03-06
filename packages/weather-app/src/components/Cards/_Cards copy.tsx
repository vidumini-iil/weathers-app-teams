import React, { Fragment, useState, useEffect } from "react";
import "./Cards.css";

import { getCity } from "server-api";


function Cards() {
    const [city, setCity] = useState();
    return (
        <>
        <div className="card-wrapper">
            <div></div>
            <div className="cards-container">

                <div className="cards">
                    <div></div>
                </div>
                <div className="cards-real blue">
                    <div>Home</div>
                    <div className="bottom-div">Bottom</div>
                </div>
                <div className="cards">
                    <div></div>
                </div>
                <div className="cards-real purple">
                    <div>Home</div>
                    <div className="bottom-div">Bottom</div>
                </div>
                <div className="cards">
                    <div></div>
                </div>       
            </div>
            <div></div>
        </div>

        <div className="card-wrapper">
            <div></div>
            <div className="cards-container">

                <div className="cards">
                    <div></div>
                </div>
                <div className="cards-real green">
                    <div>Home</div>
                    <div className="bottom-div">Bottom</div>
                </div>
                <div className="cards">
                    <div></div>
                </div>
                <div className="cards-real yellow">
                    <div>Home</div>
                    <div className="bottom-div">Bottom</div>
                </div>
                <div className="cards">
                    <div></div>
                </div>       
            </div>
            <div></div>
        </div>


        <div className="card-wrapper">
            <div></div>
            <div className="cards-container ">

                <div className="cards">
                    <div></div>
                </div>
                <div className="cards-real red">
                    <div>Home</div>
                    <div className="bottom-div">Bottom</div>
                </div>
                <div className="cards">
                    <div></div>
                </div>
                <div className="cards-real grey">
                    <div>Home</div>
                    <div className="bottom-div">Bottom</div>
                </div>
                <div className="cards">
                    <div></div>
                </div>       
            </div>
            <div></div>
        </div>

</>


    )
}

export default Cards
