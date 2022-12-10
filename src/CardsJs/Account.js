import React from "react";
import "../CardsScc/Account.css";
import Header from "../CardsJs/CardsHtml/Header";
import Footer from "../CardsJs/CardsHtml/Footer";
import { useSelector } from "react-redux";

export default function Account() {
  const logitState = useSelector((state) => state.repos.login);
  const passwordState = useSelector((state) => state.repos.password);
  return (
    <>
      <div className="shopHeader">
        <Header />
      </div>

      <section>
        <h2 className="accountTitle">My Account</h2>
        <hr />
        <div className="margins">
          <div className="ordersBlocks">
            <div className="orders">
              <div className="order_history">Order History</div>
              <div className="order_descrip">
                You haven't placed any orders yet.
              </div>
            </div>
            <div className="accountBlock">
              <div className="order_history">Account Details</div>
              <div className="order_descrip">Login: {logitState}</div>
              <div className="order_descrip">Password: {passwordState}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
