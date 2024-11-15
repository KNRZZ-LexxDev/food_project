import React, { useState } from "react";
import { TextInput } from "../../components/inputs_components/text-input/text-input";
import ReactModal from "react-modal";
import { addedProducts, editProduct } from "../../request/list_request";
import { useForm } from "react-hook-form";
import './styles/edit_style.scss';

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

export const EditProduct = (props) => {
    const {
        isModalOpen,
        onCloseModal,
        setProducts,
        id,
        initialValues,
        setIsEdit,
    } = props;
    const [errorForm, setErrorForm] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({
        defaultValues: initialValues,
    });

    const onSubmit = (data) => {
        editProduct({ ...data, id })
            .then(({ data }) => {
                setProducts((prevValue) => [
                    ...prevValue.map((product) => {
                        if (product.id === id) {
                            return { ...data, id };
                        } else {
                            return product;
                        }
                    }),
                ]);
                onCloseModal({ status: false, id: null });
            })
            .catch(() => setErrorForm(true));
    };

    return (
        <ReactModal isOpen={isModalOpen} style={customStyles}>
            <div className="productEdit">
                <div>
                    <button className="productEdit__button-close"
                        onClick={() => {
                            onCloseModal({ status: false, id: null });
                            setErrorForm(false);
                        }}
                    >
                        Close
                    </button>
                </div>

                <div>
                    {errorForm ? (
                        <div className="productEdit__error">Произошла ощибка изменения</div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="productEdit__form-wrap">
                            <TextInput
                                register={register}
                                name={"title"}
                                label={"Наименование"}
                                validate={{ required: true }}
                                errors={errors}
                            />
                            <TextInput
                                register={register}
                                errors={errors}
                                name={"cost"}
                                label={"Цена"}
                                validate={{ required: true }}
                            />
                            <button className="productEdit__button-add">Edit</button>
                        </form>
                    )}
                </div>
            </div>
        </ReactModal>
    );
}