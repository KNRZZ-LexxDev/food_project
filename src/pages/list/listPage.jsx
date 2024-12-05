import React, { useContext, useEffect, useState } from "react";
import { ListItem } from "../../components/list_item_component/listItem";
import { kfc_rest, dubai_rest, symbol_rest } from "../../data/product_data"; // Импортируем все рестораны сразу
import { BasketContext } from "../../context/basket-contenx";
import './style.scss'

export const ListPage = () => {
    const [listItems, setListItems] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(kfc_rest); // Начальное состояние для выбранного ресторана
    const { basket, setBasket } = useContext(BasketContext);

    // Хранение состояния добавленных товаров
    const [addedItems, setAddedItems] = useState([]);

    const addCard = (id) => {
        // Обновляем состояние добавленных товаров
        setAddedItems(prevAddedItems => {
            const itemExists = prevAddedItems.find(item => item.id === id);
            if (itemExists) {
                // Если товар уже добавлен, увеличиваем его количество
                return prevAddedItems.map(item =>
                    item.id === id ? { ...item, count: item.count + 1 } : item
                );
            }
            const newItem = listItems.find(elem => elem.id === id);
            return [...prevAddedItems, { ...newItem, count: 1 }]; // Устанавливаем count в 1
        });
    };

    useEffect(() => {
        // Обновляем корзину при изменении добавленных товаров
        setBasket(addedItems);
    }, [addedItems, setBasket]);

    const logHandler = () => {
        console.log('Мои товары', listItems);
        console.log('Корзина', basket);
    };

    const handleRestaurantChange = (event) => {
        const restaurant = event.target.value;
        switch (restaurant) {
            case "kfc":
                setSelectedRestaurant(kfc_rest);
                break;
            case "dubai":
                setSelectedRestaurant(dubai_rest);
                break;
            case "symbol":
                setSelectedRestaurant(symbol_rest);
                break;
            default:
                setSelectedRestaurant(kfc_rest);
        }
    };

    useEffect(() => {
        // При первом рендере устанавливаем начальные элементы списка
        setListItems(selectedRestaurant);
    }, [selectedRestaurant]);

    return (
        <div className="listPage">
            <div className="listPage__wrap">
                <h1 className="listPage__head">Order and <span className="listPage__head-part">Enjoy</span></h1>

                <div className="listPage__select-wrap">
                    <h2 className="listPage__select-desc">Выберите ресторан:</h2>

                    <select onChange={handleRestaurantChange} className="listPage__select">
                        <option value="kfc" className="listPage__option">KFC</option>
                        <option value="dubai" className="listPage__option">Dubai</option>
                        <option value="symbol" className="listPage__option">Symbol</option>
                    </select>

                </div>

                <div className="listPage__items-wrap">
                    {
                        listItems.map((elem) => (
                            <ListItem
                                key={elem.id} // Не забудьте добавить уникальный ключ
                                title={elem.title}
                                cost={elem.cost}
                                image={elem.image}
                                inCard={addedItems.some(item => item.id === elem.id)} // Проверяем, добавлен ли товар в корзину
                                addCard={() => addCard(elem.id)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
