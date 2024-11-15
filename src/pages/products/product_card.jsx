import React from "react";
import { useCallback } from "react";
import './styles/card_style.scss';

export const FoodCard = (props) => {
    const { name, cost, id, image, onRemove, onEdit } = props;

    const removeProduct = useCallback(() => {
        onRemove(id);
    }, [id, onRemove]);

    const editProduct = useCallback(() => {
        onEdit({ status: true, id })
    }, [id, onEdit]);

    return (
        <div className="foodCard">
            <div className="foodCard__inf-sec">
                <img className="foodCard__img" src={image}></img>
                <p className="foodCard__name">{name}</p>
                <b><p className="foodCard__cost">${cost}</p></b>
            </div>

            <div className="foodCard__buttons-wrap">
                <button className="foodCard__delete-card" onClick={removeProduct}>Delete</button>
                <button className="foodCard__edit-card" onClick={editProduct}>Edit</button>
            </div>
        </div>
    );
}