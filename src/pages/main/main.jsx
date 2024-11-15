import React, { useContext } from "react";
import ScooterGuy from '../../img/header_img/content_img.png';
import './style.scss'
import { MainSec } from "./mainSec/mainSec";
import { CategorySec } from "./categorySec/categorySec";
import { AdvantagesSec } from "./advantagesSec/advantagesSec";
import { RestaurantSec } from "./restaurantSec/restaurantSec";
import { MobileSec } from "./mobileSec/mobileSec";
import { ReviewsSec } from "./reviewsSec/reviewsSec";
import { SubscribeSec } from "./subscribeSec/subscribeSec";
import { FeedBackSec } from "./feedBackSec/feedBackSec";

export const MainPage = () => {
    return(
        <div className="mainPage">
            <MainSec/>
            <CategorySec/>
            <AdvantagesSec/>
            <RestaurantSec/>
            <MobileSec/>
            <ReviewsSec/>
            <SubscribeSec/>
            <FeedBackSec/>
        </div>
    );
};