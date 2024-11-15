import React from "react";
import './style.scss'

export const SubscribeSec = () => {
    return (
        <div className="subscribeSec">
            <div className="subscribeSec__input-containter">
                <input className="subscribeSec__input" placeholder="Enter your email addres"></input>
                <div className="subscribeSec__button-wrap">
                    <div className="subscribeSec__button-img"></div>
                    <p className="subscribeSec__button-text">Subscribe</p>
                </div>
            </div>
        </div>
    );
}