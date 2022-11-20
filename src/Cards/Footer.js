import React from "react";

import amazon from "../img/payment/AmazonPay.png";
import amex from "../img/payment/Amex.png";
import applePay from "../img/payment/ApplePay.png";
import btc from "../img/payment/Bitcoin.png";
import diners from "../img/payment/DinersClub.png";
import discover from "../img/payment/Discover.png";
import etherium from "../img/payment/Etherium.png";
import mastercard from "../img/payment/Mastercard.png";
import shopPay from "../img/payment/ShopPay.png";
import stripe from "../img/payment/Stripe.png";
import visa from "../img/payment/Visa.png";
import payPal from "../img/payment/PayPal.png";
import gpay from "../img/payment/GooglePay.png";

import facebook from "../img/facebook.png";
import inst from "../img/instagram.png";

export default function Footer() {
  return (
    <>
      <hr />
      <h2 className="block_title">STAY CONNECTED</h2>
      <div className="Connect_Main_Block">
        <div className="SocialBlock">
          <div className="btnSocial">SHOW FACEBOOK</div>
          <img className="iconSocial Facebook" src={facebook} alt="" />
        </div>
        <div className="Border"></div>
        <div className="Connect_Main_Block">
          <img className="iconSocial" src={inst} alt="" />
          <div className="btnSocial">SHOW INSTAGRAM</div>
        </div>
      </div>
      <hr />
      <footer>
        <div className="Footer">
          <div className="payment_blocks">
            <img className="payment" src={amex} alt="" />
            <img className="payment" src={shopPay} alt="" />
            <img className="payment" src={discover} alt="" />
            <img className="payment" src={payPal} alt="" />
            <img className="payment" src={btc} alt="" />
            <img className="payment" src={etherium} alt="" />
            <img className="payment" src={mastercard} alt="" />
            <img className="payment" src={visa} alt="" />
            <img className="payment" src={gpay} alt="" />
            <img className="payment" src={applePay} alt="" />
            <img className="payment" src={amazon} alt="" />
            <img className="payment" src={stripe} alt="" />
            <img className="payment" src={diners} alt="" />
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
}
