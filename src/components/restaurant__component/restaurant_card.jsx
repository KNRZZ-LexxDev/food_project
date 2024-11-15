import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'


export const RestaurantCard = ({img, name, date_open, date_close}) => {
    const navigate = useNavigate();
    return(
        
        <div className="restaurantCard">
            <img className="restaurantCard__img" src={img}></img>
            <div className="restaurantCard__desc-wrap">

                <p className="restaurantCard__desc-head">{name}</p>

                <div className="restaurantCard__desc-timer-wrap"> 

                    <div className="restaurantCard__desc-timer-img"></div>

                    <p className="restaurantCard__time">{date_open}-{date_close}</p>

                    <div className="restaurantCard__button-wrap" onClick={() => navigate('/products')}>
                        <div className="restaurantCard__button-img"></div>
                    </div>

                </div>

            </div>
        </div>
    );
};