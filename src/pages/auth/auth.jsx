import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs_components/text-input/text-input";
import { useNavigate } from "react-router-dom";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "../../App";
import { AdminContext } from "../../context/admin-context";


export const AuthPage = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const { isAdmin, setIsAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        var userData = JSON.parse(localStorage.getItem('user'));
        var adminData = JSON.parse(localStorage.getItem('admin'));
        console.log(userData)
        const {phone, password} = data
        if (password == adminData.admin_pass && phone == adminData.admin_phone) {
            setIsAuth(true);
            setIsAdmin(true);
            navigate('/');
        } else if (password == userData.user_pass && phone == userData.user_phone) {
            setIsAuth(true);
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
                validate={{
                    required: true,
                    minLength: {
                        value: 2,
                        message: 'Имя должно содержать минимум 2 символа'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Имя не должно превышать 30 символов'
                    },
                    pattern: {
                        value: /^[0-9]*$/i
                    }
                }}
                placeholder="Введите телефон начиная с +"
                type="text"
                register={register}
            />

            <TextInput
                errors={errors}
                name={"password"}
                label={"Пароль"}
                // auth={auth}
                validate={{
                    required: true,
                    minLength: {
                        value: 2,
                        message: 'Имя должно содержать минимум 2 символа'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Имя не должно превышать 30 символов'
                    },
                    pattern: {
                        value: /^[A-Z0-9]*$/i
                    }
                }}
                placeholder="Введите пароль"
                type="password"
                register={register}
            />
            <button className="authPage__button">Sign In</button>
        </form>
    </div>
    );
};