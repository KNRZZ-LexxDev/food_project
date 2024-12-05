import React, { useContext, useState } from "react";
import { BasketContext } from "../../context/basket-contenx"; 
import { ListItem } from "../../components/list_item_component/listItem"; 
import Modal from "../../components/modal/modal";
import './style.scss';

export const BasketPage = () => {
    const { basket, setBasket } = useContext(BasketContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState({ name: "", status: "", totalPrice: 0, waitTime: "" });

    const increaseItemCount = (id) => {
        setBasket(prevBasket =>
            prevBasket.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decreaseItemCount = (id) => {
        setBasket(prevBasket => {
            const updatedBasket = prevBasket.map(item =>
                item.id === id ? { ...item, count: item.count - 1 } : item
            ).filter(item => item.count > 0); 

            return updatedBasket;
        });
    };

    const getTotalPrice = () => {
        return basket.reduce((total, item) => total + item.cost * item.count, 0);
    };

    const handleCheckout = () => {
        const totalPrice = getTotalPrice();
        const name = JSON.parse(localStorage.getItem('user')).user_name; // Получаем имя из localStorage
        
        if (name) {
            setOrderDetails({
                name,
                status: "Заказ оформлен",
                totalPrice,
                waitTime: "Доставка в течении часа"
            });
            setBasket([]); // Очищаем корзину
            setIsModalOpen(true); // Открываем модальное окно
        } else {
            alert("Имя пользователя не найдено. Пожалуйста, добавьте его в localStorage.");
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="basketPage">
            <h1 className="basketPage__head">Корзина</h1>
            {basket.length === 0 ? (
                <div className="basketPage__empty-wrap">
                    <p className="basketPage__empty-text">Ваша корзина пуста.</p>
                </div>
            ) : (
                <div className="basketPage__items-wrap">
                    <ul className="basketPage__item-arr">
                        {basket.map(item => (
                            <li key={item.id} className="basketPage__item-arr-item">
                                <ListItem
                                    title={item.title}
                                    cost={item.cost}
                                    image={item.image}
                                    inCard={true}
                                />
                                <div className="basketPage__item-arr-item-control-wrap">
                                    <button onClick={() => decreaseItemCount(item.id)} className="basketPage__arr-item-control-button">-</button>
                                    <span className="basketPage__arr-item-control-span">{item.count}</span>
                                    <button onClick={() => increaseItemCount(item.id)} className="basketPage__arr-item-control-button">+</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="basketPage__total-wrap">
                        <h2 className="basketPage__total-head">Итоговая сумма: {getTotalPrice()} ₽</h2>
                        <button onClick={handleCheckout} className="basketPage__total-button">Оформить заказ</button>
                    </div>
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal} orderDetails={orderDetails} />
        </div>
    );
};
