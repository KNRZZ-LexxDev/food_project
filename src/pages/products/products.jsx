import React, {useEffect, useState} from "react";
import { CreateProduct } from "./product_create";
import { getProducts } from "../../request/list_request";
import { FoodCard } from "./product_card";
import { removeOneProduct } from "../../request/list_request";
import { EditProduct } from "./product_edit";
import './style.scss'

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEdit, setIsEdit] = useState({status: false, id: null});

    const addProduct = () => {
        setIsModalOpen(true);
    };

    useEffect(() =>{
        getProducts()
            .then(({data}) => {
                setProducts(data.map((elem) => ({...elem})));
            })
            .catch(() => null);
    }, []);


    const removeProduct = (id) => {
        removeOneProduct(id)
          .then(({}) => {
            setProducts((prevValue) =>
              prevValue.filter((product) => product.id !== id)
            );
          })
          .catch(() => alert("Ошибка"));
      };
    
      const onCloseModal = () => {
        setIsModalOpen(false);
      };

    return (
        <div className="productPage">

            <h1 className="productPage__head"> All Our <span className="productPage__head-part"> Products </span> </h1>

            <div className="productPage__add-product-wrap">
                <button className="productPage__add-button" onClick={addProduct}>Add Product</button>
                <span className="productPage__products-count">Products count: {products.length}</span>
            </div>
           
            <div className="productPage__products-wrap">
                {products.map( (product) => {
                    return(
                        <FoodCard
                            {...product}
                            key={product.is}
                            name={product.title}
                            cost={product.cost}
                            image={product.img}
                            onRemove={removeProduct}
                            onEdit={setIsEdit}
                        />
                    )
                })} 
            </div>

            <CreateProduct
                setProducts={setProducts}
                onCloseModal={onCloseModal}
                isModalOpen={isModalOpen}
            />

            {isEdit.status && (
                <EditProduct
                    setProducts={setProducts}
                    onCloseModal={setIsEdit}
                    isModalOpen={isEdit.status}
                    initialValues={
                        products.filter((product) => product.id === isEdit.id)[0]
                    }
                    setIsEdit={setIsEdit}
                    id={isEdit.id}
                />
            )}
        </div>
    );
};