import React from "react";
import './style.scss'
import user from '../../../img/reviews_img/user.png'

export const ReviewsSec = () => {
    return (
        <div className="reviewsSec">
            <b><p className="reviewsSec__head"> What Our Client Are <span className="reviewsSec__head-part">Saying</span> </p></b>

            <div className="reviewsSec__review-item">
                <img src={user} className="reviewsSec__review-user"></img>

                <div className="reviewsSec__review-about-user">

                    <p className="reviewsSec__review-text"> 
                        EFood has the most intriguing food order system in the country. <br/>
                        UI in both their app and web Is very simple and easy to use, enhancing the UX.<br/>
                        Their delivery men are also quite professional and knows the neighborhood well.<br/>
                        Till now I never had to guide them to my address for delivery.
                    </p>


                    <div className="reviewsSec__review-user-footer">

                        <div className="reviewsSec__review-user-wrap">
                            <p className="reviewsSec__review-user-name">Anglina Jole</p>
                            <p className="reviewsSec__review-status">Food lover</p>
                        </div>

                        <div className="reviewsSec__review-control-wrap">
                            <div className="reviewsSec__review-back"></div>
                            <div className="reviewsSec__review-next"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}