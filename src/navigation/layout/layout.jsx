import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = () => {
    return (
        <div className="LayoutMainWrap">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Layout;
