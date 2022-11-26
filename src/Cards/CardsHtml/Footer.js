import React from "react";

import amazon from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/AmazonPay.png";
import amex from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Amex.png";
import applePay from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/ApplePay.png";
import btc from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Bitcoin.png";
import diners from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/DinersClub.png";
import discover from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Discover.png";
import etherium from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Etherium.png";
import mastercard from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Mastercard.png";
import shopPay from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/ShopPay.png";
import stripe from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Stripe.png";
import visa from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/Visa.png";
import payPal from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/PayPal.png";
import gpay from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/payment/GooglePay.png";

import facebook from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/facebook.png";
import inst from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/instagram.png";

import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CadrsSccHtml/Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      {/* <h2 className="block_title">STAY CONNECTED</h2>
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
      </div> */}
      <div className="mainFooterBlocks">
        <div className="Newsletter">
          <div className="Newsletter_title">NEWSLETTER</div>
          <div className="description">
            Enter your email to receive news updates and get access to future
            discount codes.
          </div>
          <input
            className="inputEmail"
            type="email"
            placeholder="Email address"
          />
          <br />
          <div className="subBtn">SUBSCRIBE</div>
        </div>
        <div className="socialBlocks">
          <div>STAY CONNECTED</div>
          <div className="socialBlock">
            <img className="iconSocial Facebook" src={facebook} alt="" />
            <span className="social">Facebook</span>
          </div>
          <div className="socialBlock">
            <img className="iconSocial" src={inst} alt="" />
            <span className="social">Instagram</span>
          </div>
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
