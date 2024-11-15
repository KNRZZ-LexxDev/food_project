import React, { useEffect, useState } from "react";
import './style.scss'


export const AdvantagesSec = () => {

    return(
        <div className="advantagesSec">
            <div className="advantagesSec__img"></div>
            
            <div className="advantagesSec__desc-wrap">
                
                <b><p className="advantagesSec__desc-head"> 
                    <span className="advantagesSec__desc-part-head"> Stay </span> 
                    At Home, We Will Provide 
                    <span className="advantagesSec__desc-part-head"> Good </span> 
                    <span className="advantagesSec__desc-part-head"> Food </span>
                
                </p></b>

                <p className="advantagesSec__desc-body">
                    We provide tasty food and superfast delivery at your home.  
                    Let’s use our services right now and get discounts of up to 50%.
                </p>

                <div className="advantagesSec__desc-plus">
                    <div className="advantagesSec__desc-plus-img-one"></div>
                    <p className="advantagesSec__desc-plus-text">fasted delivery in 30 Minutes</p>
                </div>

                <div className="advantagesSec__desc-plus">
                    <div className="advantagesSec__desc-plus-img-two"></div>
                    <p className="advantagesSec__desc-plus-text">300+ delivery men</p>
                </div>

                <div className="advantagesSec__desc-plus">
                    <div className="advantagesSec__desc-plus-img-three"></div>
                    <p className="advantagesSec__desc-plus-text">500+ restaurant & cafe shop</p>
                </div>

                <button className="advantagesSec__desc-button">See more</button>
            </div>
        </div>
    );
};