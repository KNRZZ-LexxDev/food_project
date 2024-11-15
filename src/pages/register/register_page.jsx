import React from "react";
import './style.scss'
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs_components/text-input/text-input";
import { useNavigate } from "react-router-dom";


export const RegisterPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        control,
        watch,
    } = useForm();


    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(
            {
                "user_name": getValues("name"),
                "user_phone": getValues("phone"),
                "user_pass":getValues("password"),
            })
        )
        navigate('/auth')
    };

    return(
        <div className="registerPage">
            <h1 className="registerPage__head">Join Us and <span className="registerPage__head-part">Enjoy</span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className="registerPage__form-wrap">
                
                <TextInput
                    errors={errors}
                    name={"name"}
                    label={"Имя"}
                    register={register}
                    validate={{required: true}}
                    placeholder="Введите имя"
                    type="text"
                />

                <TextInput
                    errors={errors}
                    name={"phone"}
                    label={"Телефон"}
                    register={register}
                    validate={{required: true}}
                    placeholder="Введите телефон начиная с +"
                    type="text"
                />

                <TextInput
                    errors={errors}
                    name={"password"}
                    label={"Пароль"}
                    register={register}
                    validate={{required: true}}
                    placeholder="Введите пароль"
                    type="password"
                />

                <button className="registerPage__button">Sign Up</button>
            </form>
        </div>
    );
};