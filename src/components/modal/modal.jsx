import React from "react";
import './style.scss'; // Импортируйте стили для модального окна

const Modal = ({ isOpen, onClose, orderDetails }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <h2 className="modal__head">Информация о заказе</h2>
                <p className="modal__desc"><strong>Имя:</strong> {orderDetails.name}</p>
                <p className="modal__desc"><strong>Статус заказа:</strong> {orderDetails.status}</p>
                <p className="modal__desc"><strong>Итоговая стоимость:</strong> {orderDetails.totalPrice} ₽</p>
                <p className="modal__desc"><strong>Время ожидания:</strong> {orderDetails.waitTime}</p>
                <p className="modal__desc"><strong>Курьер позвонит вам для уточнения адреса</strong></p>
                <button onClick={onClose} className="modal__button">Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
