import React, {useState} from "react";
import './style.scss'


export const FilterItem = ({img}) => {
    const [active, setActive] = useState(false);

    return(
    <div className={"filterItem" + (active ? "__active" : "")} onClick={() => setActive(!active)}>
            <img className="filterItem__img" src={img}>
        
            </img>
        </div>
    );
};