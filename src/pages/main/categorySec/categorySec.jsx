import React, { useEffect, useState } from "react";
import './style.scss'
import { filter_img } from "../../../consts/filter_img.js";
import { FilterItem } from "../../../components/filter_component/filter_component";
import { getFoods } from "../../../request/product_request.js";
import { ProductCard } from "../../../components/product_component/product_card.jsx";


export const CategorySec = () => {
    const [foods, setFoods] = useState([]);

    useEffect( ()=>{
        getFoods()
        .then( ({data}) => {
            setFoods(data)
        })
        .catch(() => null);
    }, [])

    return(
        <div className="categorySec" style={{display: (foods.length === 0 ? 'none' : 'block')}}>
            <div className="categorySec__wrap">

                <div className="categorySec__head-wrap">
                    <p className="categorySec__head-text">Our popular <span className="categorySec__head-text-part">Category</span></p>
                </div>

                <div className="categorySec__filter-wrap">
                    {filter_img.map( (elem) => {
                        return(
                            <FilterItem img={elem.img}/>
                        )
                    })}
                </div>

                <div className="categorySec__products-wrap">
                    {foods.map((elem) => {
                        return(
                            <ProductCard img={elem.img} name={elem.title} cost={elem.cost}/>
                        )
                    })}
                </div>
                
            </div>
        </div>
    );
};