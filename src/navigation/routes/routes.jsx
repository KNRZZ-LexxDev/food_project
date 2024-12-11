import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { ErrorElement } from "../errorElement/errorElement";
import { MainPage } from "../../pages/main/main";

import { AuthPage } from "../../pages/auth/auth";
import { ListPage } from "../../pages/list/listPage";
import { ProductsPage } from "../../pages/products/products";
import { RegisterPage } from "../../pages/register/register_page";
import { ProfilePage } from "../../pages/profile/profile";
import { BasketPage } from "../../pages/basket/basketPage";
import { AdminPage } from "../../pages/admin/adminPage";
import { FeedBackPage } from "../../pages/feedBack/feedBackPage";

const AuthPages = [
    {
        path: '/list',
        Component: ListPage,
    },
    {
        path: '/profile',
        Component: ProfilePage,
    },
    {
        path: '/basket',
        Component: BasketPage,
    },
    {
        path: '/products',
        Component: ProductsPage,
    },
    {
        path: '/feedbacks',
        Component: FeedBackPage,
    },
    {
        path: '/admin',
        Component: AdminPage,
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