import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { ErrorElement } from "../errorElement/errorElement";
import { MainPage } from "../../pages/main/main";

import { AuthPage } from "../../pages/auth/auth";
import { ListPage } from "../../pages/list/list";
import { ProductsPage } from "../../pages/products/products";
import { RegisterPage } from "../../pages/register/register_page";
import { ProfilePage } from "../../pages/profile/profile";

const AuthPages = [
    {
        path: '/list',
        Component: ListPage,
    },
    {
        path: '/products',
        Component: ProductsPage,
    },
    {
        path: '/profile',
        Component: ProfilePage,
    },

]

const notAuthPages = [
    {
        path: '/register',
        Component: RegisterPage,
    },
    {
        path: '/auth',
        Component: AuthPage,
    },
]


export const getRoutes  = (isAuth) => {
    return createBrowserRouter([
        {
            Component: Layout,
            errorElement: <ErrorElement/>,
            children: [
                {
                    path: '/',
                    Component: MainPage,
                },
                ...(isAuth ? AuthPages : notAuthPages)

            ]
        }
    ])
}