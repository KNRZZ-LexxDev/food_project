import React, { useEffect, useState } from "react";
import './style.scss'
import { getRestaurants } from "../../../request/product_request";
import { RestaurantCard } from "../../../components/restaurant__component/restaurant_card";


export const RestaurantSec = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect( ()=>{
        getRestaurants()
        .then( ({data}) => {
            setRestaurants(data)
        })
        .catch(() => null);
    }, [])

    return(
        <div className="restaurantSec">
            <b><p className="restaurantSec__head-text"> Top Food <span className="restaurantSec__head-text-part"> Restaurant </span> </p></b>

            <div className="restaurantSec__card-wrap">
                {restaurants.map((elem) => {
                    return(
                        <RestaurantCard img={elem.img} name={elem.name} date_open={elem.date_open} date_close={elem.date_close} />
                    );
                })}
            </div>
        </div>
    );
};