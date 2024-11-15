import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs_components/text-input/text-input";
import { useNavigate } from "react-router-dom";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "../../App";


export const AuthPage = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        var userData = JSON.parse(localStorage.getItem('user'));
        console.log(userData)
        const {phone, password} = data
        if (password == userData.user_pass && phone == userData.user_phone) {
            setIsAuth(true);
            console.log(isAuth)
            navigate('/');
        }
    };
    
    return(  
        <div className="authPage">
        <h1 className="authPage__head">Are you back? <span className="authPage__head-part">Welcome</span></h1>
        <form onSubmit={handleSubmit(onSubmit)} className="authPage__form-wrap">
            <TextInput
                errors={errors}
                name={"phone"}
                label={"Телефон"}
                // auth={auth}
                validate={{required: true}}
                placeholder="Введите телефон начиная с +"
                type="text"
                register={register}
            />

            <TextInput
                errors={errors}
                name={"password"}
                label={"Пароль"}
                // auth={auth}
                validate={{required: true}}
                placeholder="Введите пароль"
                type="password"
                register={register}
            />
            <button className="authPage__button">Sign In</button>
        </form>
    </div>
    );
};