import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App";
import './style.scss'
import logo from '../../img/header_img/logo.png';
import search from '../../img/header_img/search_icon.png'
import basket from '../../img/header_img/basket_icon.png'

export const Header = () => {
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="header__wrap">

                <div className="header__logo" onClick={() => console.log(isAuth)}>
                    <img src={logo} />
                </div>

                <div className="header__link-wrap">
                    <Link className="header__link" to={"/"}>Home</Link>
                    {isAuth && <Link className="header__link" to={"/profile"}>Profile</Link>}
                    {!isAuth && <Link className="header__link" to={"/auth"}>Auth</Link>}
                    {isAuth && <Link className="header__link" to={"/list"}>List</Link>}
                    {isAuth && <Link className="header__link" to={"/products"}>Products</Link>}

                    <img src={search} className="header__search"></img>

                    <img src={basket} className="header__basket"></img>
                </div>

                <button className="header__button" onClick={() =>  navigate("/register")}>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;
