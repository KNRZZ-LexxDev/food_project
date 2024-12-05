import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs_components/text-input/text-input";
import ReactModal from "react-modal";
import { addedProducts } from "../../request/list_request";
import './styles/create_style.scss';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        background: "#ffffff"
        
    },
};

export const CreateProduct = (props) => {
    const { isModalOpen, onCloseModal, setProducts } = props;
    const [errorForm, setErrorForm] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const onSubmit = (data) => {
        addedProducts(data)
            .then(({ data }) => {
                setProducts((prev) => [...prev, { ...data, title: data.title }]);
                onCloseModal();
            })
            .catch(() => setErrorForm(true));
    };

    return (
        <ReactModal isOpen={isModalOpen} style={customStyles}>
            <div className="productCreate">
                <div className="productCreate__wrap">
                    {errorForm ? (
                        <div className="productCreate__wrap-error"> Произошла ошибка добавления</div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="productCreate__wrap-form">
                            <TextInput
                                register={register}
                                name={"title"}
                                label={"Наименование"}
                                validate={{ required: true }}
                                errors={errors}
                            />
                            <TextInput
                                register={register}
                                name={"cost"}
                                label={"Цена"}
                                validate={{ required: true }}
                                errors={errors}
                            />
                            <TextInput
                                register={register}
                                name={"img"}
                                label={"Изображение"}
                                placeholder="Прикрепите ссылку"
                                validate={{ required: true }}
                                errors={errors}
                            />
                            <button className="productCreate__button">Добавить продукт</button>
                        </form>
                    )}
                </div>
            </div>
        </ReactModal>
    );
};