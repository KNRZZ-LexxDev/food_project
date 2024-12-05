import React from "react";
import ScooterGuy from '../../../img/header_img/content_img.png';
import './style.scss'
export const MainSec = () => {
    return(
        <div className="mainSec">
            <div className="mainSec__wrap">
                <div className="mainSec__text-wrap">
                    <p className="mainSec__text-head">Super Fast <span className="mainSec__text-head-part">Food Delivery</span> Service</p>
                    <p className="mainSec__text-desc">We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>

                    <div className="mainSec__button-wrap">
                        <button className="mainSec__button">Explore Food</button>
                        <p className="mainSec__link">Download App</p>
                    </div>
                </div>

                <div className="mainSec__img-wrap">
                    <img className="mainSec__img-item" src={ScooterGuy}/>
                </div>
            </div>
        </div>
    );
};