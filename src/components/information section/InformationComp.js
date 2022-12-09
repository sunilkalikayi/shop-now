import React from "react";

import Shipping from "../../assets/icons/shipping.svg"
import Support from "../../assets/icons/support.svg"
import Return from "../../assets/icons/return.svg"
import Payment from "../../assets/icons/payment.svg"
import "./InfromationComp.css"

export default function InformationComp() {
    return (
        <div className="info_sec">
            <div className="info_card">
                <img src={Shipping} alt="Shipping icon" />
                <div>
                    <div className="info_card_title"> FREE SHIPPING</div>
                    <div className="info_card_des">Enjoy free shipping on all orders above $100</div>
                </div>
            </div>
            <div className="info_card">
                <img src={Support} alt="Shipping icon" />
                <div>
                    <div className="info_card_title"> SUPPORT 24/7</div>
                    <div className="info_card_des">Our support team is there to help you for queries</div>
                </div>
            </div>
            <div className="info_card">
                <img src={Return} alt="Shipping icon" />
                <div>
                    <div className="info_card_title"> 30 DAYS RETURN </div>
                    <div className="info_card_des">Simply return it within 30 days for an exchange.</div>
                </div>
            </div>
            <div className="info_card">
                <img src={Payment} alt="Shipping icon" />
                <div>
                    <div className="info_card_title"> 100% PAYMENT SECURE</div>
                    <div className="info_card_des">Our payments are secured with 256 bit encryption</div>
                </div>
            </div>
            
        </div>
    );
}
