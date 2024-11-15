import React from "react";
import './style.scss'
export const MobileSec = () => {
    return(
        <div className="mobileSec">

            <div className="mobileSec__desc-wrap">

                <p className="mobileSec__desc-head"> Download  Our  <span className="mobileSec__desc-head-part"> Mobile App </span> </p>
                
                <p className="mobileSec__desc-body"> 
                    It's all at your fingertips -- the restaurants you love. <br/>
                    Find the right food to suit your mood, and make the first bite last. <br/>
                    Go ahead, download app and get 50% discount
                </p>

                <div className="mobileSec__desc-button-wrap">
                    <div className="mobileSec__desc-ios-button"></div>
                    <div className="mobileSec__desc-android-button"></div>
                </div>

            </div>

            <div className="mobileSec__desc-img"></div>
        </div>
    );
}