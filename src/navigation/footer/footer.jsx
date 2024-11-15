import React from "react";
import './style.scss'


export const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__high-sec">

                <div className="footer__main-block">
                    <div className="footer__logo"></div>

                    <div className="footer__mark-block">
                        <div className="footer__mark-img_one"></div>
                        <p className="footer__mark-text">Dhaka, Bangladesh</p>
                    </div>
                    
                    <div className="footer__mark-block">
                        <div className="footer__mark-img_two"></div>
                        <p className="footer__mark-text">0943833399</p>
                    </div>

                    <div className="footer__mark-block">
                        <div className="footer__mark-img_three"></div>
                        <p className="footer__mark-text">support@efood.com</p>
                    </div>

                    <div className="footer__soc-wrap">
                        <div className="footer__facebook"></div>
                        <div className="footer__twitter"></div>
                        <div className="footer__instagram"></div>
                        <div className="footer__pinterest"></div>
                    </div>

                </div>

                <div className="footer__inf-block">
                    <b><p className="footer__inf-head">Service</p></b>
                    <p className="footer__inf-body-item">How it works</p>
                    <p className="footer__inf-body-item">Home delivery</p>
                    <p className="footer__inf-body-item">Products</p>
                    <p className="footer__inf-body-item">Menu</p>
                </div>
                
                <div className="footer__inf-block">
                    <b><p className="footer__inf-head">Company</p></b>
                    <p className="footer__inf-body-item">About Us</p>
                    <p className="footer__inf-body-item">News</p>
                    <p className="footer__inf-body-item">Our trusted partner</p>
                    <p className="footer__inf-body-item">New users FAQ</p>
                </div>

                <div className="footer__inf-block">
                    <b><p className="footer__inf-head">Supports</p></b>
                    <p className="footer__inf-body-item">Help center</p>
                    <p className="footer__inf-body-item">Feedback</p>
                    <p className="footer__inf-body-item">Contact us</p>
                    <p className="footer__inf-body-item">Terms conditions</p>
                </div>

                <div className="footer__inf-block">
                    <b><p className="footer__inf-head">Resources</p></b>
                    <p className="footer__inf-body-item">Download app</p>
                    <p className="footer__inf-body-item">Blog</p>
                    <p className="footer__inf-body-item">What’s new</p>
                    <p className="footer__inf-body-item">Sitemap</p>
                </div>
            </div>

            <div className="footer__low-sec">
                <p className="footer__low-sec-main-text">© 2021 EFood - All rights reserved.</p>
                <div className="footer__low-sec-option-wrap">
                    <p className="footer__low-sec-option-item">Privacy</p>
                    <p className="footer__low-sec-option-item">Security</p>
                    <p className="footer__low-sec-option-item">Terms</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
