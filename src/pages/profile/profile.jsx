import React from "react";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FormFeedback } from "../../components/form/form-feedback";
import { AdminContext } from "../../context/admin-context";

var userData = JSON.parse(localStorage.getItem('user'));
var adminData = JSON.parse(localStorage.getItem('admin'));

export const ProfilePage = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    setIsAuth(false);
    setIsAdmin(false);
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className="profilePage">
        <h1 className="profilePage__head">Welcome, <span className="profilePage__head-part">{ isAdmin ? adminData.admin_name : userData.user_name}</span></h1>
        
        <div className="profilePage__inf-block">
          <p className="profilePage__inf-block-head">Актуальная информация о вас</p>
          <div className="profilePage__inf-block-date-containter">Ваш номер телефона: {isAdmin ? adminData.admin_phone :userData.user_phone}</div>
          <div className="profilePage__inf-block-date-containter">Ваш пароль: { isAdmin ? adminData.admin_pass : userData.user_pass}</div>
        </div>

        <FormFeedback/>

        <div className="profilePage__log-out-button" onClick={() => logOutHandler()}>Log out</div>
    </div>    
  );
};