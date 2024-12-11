import React from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'
export const AdminPage = () => {
    const navigate = useNavigate();

    return(
        <div className="adminPage">
            <div className="adminPage__wrap">

                <h1 className="adminPage__head">Admin <span className="adminPage__head-part"> Panel </span></h1>

                <div className="adminPage__item">
                    Редактировать продукцию 
                    <span className="adminPage__item-button" onClick={() => navigate('/products')}>Начать</span> 
                
                </div>

                <div className="adminPage__item">
                    Обработать обратную связь 
                    <span className="adminPage__item-button" onClick={() => navigate('/feedbacks')}>Начать</span>
                </div>

            </div>
        </div>
    )
}