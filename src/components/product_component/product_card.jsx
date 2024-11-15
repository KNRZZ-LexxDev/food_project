import React, {useState} from "react";
import './style.scss'

export const ProductCard = ({img, name, cost}) => {
    const [active, setActive] = useState(false);

    return(
        <div className="productCard">
            <img className="productCard__img" src={img}></img>
            <div className="productCard__star"></div>
            <p className="productCard__name">{name}</p>
            <b><p className="productCard__cost">${cost}</p></b>
            <button className="productCard__button">Add to Cart</button>
        </div>
    );
};