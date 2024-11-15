import React from "react";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FormFeedback } from "../../components/form/form-feedback";

var userData = JSON.parse(localStorage.getItem('user'));

export const ProfilePage = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    setIsAuth(false);
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className="profilePage">
        <h1 className="profilePage__head">Welcome, <span className="profilePage__head-part">{userData.user_name}</span></h1>
        
        <div className="profilePage__inf-block">
          <p className="profilePage__inf-block-head">Актуальная информация о вас</p>
          <div className="profilePage__inf-block-date-containter">Ваш номер телефона: {userData.user_phone}</div>
          <div className="profilePage__inf-block-date-containter">Ваш пароль: {userData.user_pass}</div>
        </div>

        <FormFeedback/>

        <button className="profilePage__log-out-button" onClick={() => logOutHandler()}>Log out</button>
    </div>    
  );
};