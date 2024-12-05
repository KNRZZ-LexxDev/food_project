import React from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'

export const ErrorElement = () => {
    const navigate = useNavigate();
    return (
        <div className="errorElement">
             <p className="errorElement__desc">Ошибка 404. Обратитесь к администратору</p>
             <div className="errorElement__button" onClick={() => navigate('/')}>На главную</div>
        </div>
    );
};