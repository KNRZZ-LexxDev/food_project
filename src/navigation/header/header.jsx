import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App";
import './style.scss'
import logo from '../../img/header_img/logo.png';
import search from '../../img/header_img/search_icon.png'
import basket from '../../img/header_img/basket_icon.png'
import { AdminContext } from "../../context/admin-context";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [isOpen, setOpen] = useState();

  function burgerCheck(isOpen) {
    if (isOpen == true) {
      setOpen(false)
    }
    else {
      setOpen(true)
    }
  }

  function navHandler(route, isOpen) {
    if (route == 'Home') {
      navigate('/')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }

    if (route == 'Register') {
      navigate('/register')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }

    if (route == 'Auth') {
      navigate('/auth')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }

    if (route == 'Profile') {
      navigate('/profile')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }

    if (route == 'Products') {
      navigate('/products')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }

    if (route == 'List') {
      navigate('/list')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }

    if (route == 'Basket') {
      navigate('/basket')
      if (isOpen == true) {
        burgerCheck(isOpen)
      }
    }
  }

  let admin = JSON.parse(localStorage.getItem('admin'))

  return (
    <header className="header">
      <div className="header__wrap">

        <div className="header__logo" onClick={() => console.log(admin)}>
          <img src={logo} />
        </div>

        <div className="header__link-wrap">
          <Link className="header__link" to={"/"}>Home</Link>
          {isAuth && <Link className="header__link" to={"/profile"}>Profile</Link>}
          {!isAuth && <Link className="header__link" to={"/auth"}>Auth</Link>}
          {isAuth && <Link className="header__link" to={"/list"}>List</Link>}
          {isAdmin && isAuth && <Link className="header__link" to={"/products"}>Admin</Link>}

          <img src={search} className="header__search"></img>

          <img src={basket} className="header__basket" onClick={() => navigate("/basket")}></img>

          <button className="header__button" onClick={() => navigate("/register")}>Sign Up</button>
        </div>


        <div className='header__burger' onClick={() => { burgerCheck(isOpen) }}></div>



        <div className={"header__mobile-wrap" + (isOpen ? '-Active' : '')}>
          <div className="header__mobile__icon-wrap">
            <img src={search} className="header__search"></img>

            <img src={basket} className="header__basket" onClick={() => navHandler('Basket', isOpen)}></img>
          </div>
          <div className="header__mobile__link-wrap">
            <p onClick={() => navHandler('Home', isOpen)} className='header__mobile-link-item'><b>Главная</b></p>
            {!isAuth && <p onClick={() => navHandler('Register', isOpen)} className='header__mobile-link-item'><b>Регистрация</b></p>}
            {!isAuth && <p onClick={() => navHandler('Auth', isOpen)} className='header__mobile-link-item'><b>Авторизация</b></p>}
            {isAuth && <p onClick={() => navHandler('Profile', isOpen)} className='header__mobile-link-item'><b>Профиль</b></p>}
            {isAdmin && isAuth && <p onClick={() => navHandler('Products', isOpen)} className='header__mobile-link-item'><b>Aдмин</b></p>}
            {/* {isAuth && <p onClick={() => navHandler('Order', isOpen)} className='header__mobile-link-item'><b>Заказ</b></p>} */}
            {isAuth && <p onClick={() => navHandler('List', isOpen)} className='header__mobile-link-item'><b>Заказ</b></p>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
