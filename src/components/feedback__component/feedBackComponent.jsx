import React from 'react';
import './style.scss'

export const FeedBackComponent = ({ name, phone, desc, isPending, onProcess }) => {
    return (
        <div className={isPending ? 'feedBack__true-wrap' : 'feedBack__false-wrap'}>
            <div className='feedBack__text-wrap'>
                <div className={isPending ? 'feedBack__true-head' : 'feedBack__false-head'}>Имя: {name}</div>
                <div className={isPending ? 'feedBack__true-phone' : 'feedBack__false-phone'}>Телефон: {phone}</div>
                <div className={isPending ? 'feedBack__true-desc' : 'feedBack__false-desc'}>Описание: {desc}</div>
            </div>

            <div className='feedBack__button-wrap'>
                <button onClick={onProcess} disabled={isPending} className={isPending ? 'feedBack__true-button' : 'feedBack__false-button'}>
                    {isPending ? 'Обработка...' : 'Обработать'}
                </button>
            </div>
        </div>
    );
};
