import React from "react";
import './style.scss'
export const ListItem = ({title, cost, image, inCard, addCard, count}) => {
    return(
        <div className="listItem">
            <div className="listItem__wrap">
                <img className="listItem__img" src={image}></img>
                <h2  className="listItem__head">{title}</h2>
                <p className="listItem__cost">{cost}₽</p>
                <div className="listItem__add-basket"  style={{display: (inCard ? 'none' : 'flex')}} onClick={addCard}>Купить</div>
            </div>
        </div>
    )
}