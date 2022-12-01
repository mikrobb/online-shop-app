import React from "react";
import { Link } from "react-router-dom";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CadrsSccHtml/Header.css";
import { useState } from "react";
import ModalSearch from "../CardsModal/ModalSearch";
import ModalCart from "../CardsModal/ModalCart";

export default function Header() {
  const [modalSearchActive, setModalSearchActive] = useState();
  const [modalCartActive, setModalCartActive] = useState();

  return (
    <>
      <ModalSearch
        active={modalSearchActive}
        setActive={setModalSearchActive}
      />
      <ModalCart active={modalCartActive} setActive={setModalCartActive} />
      <div className="Header_main_block">
        <div className="Header_block">
          <Link className="links" to="/">
            <div className="Header_span">HOME</div>
          </Link>
          <Link className="links" to="/shop">
            <div className="Header_span">SHOP</div>
          </Link>
          <Link className="links" to="/login">
            <div className="Header_span">LOGIN</div>
          </Link>
        </div>
        <div className="Header_block">
          <div className="Title_span">SerjixVintage</div>
        </div>
        <div className="Header_block">
          <div className="Header_span">
            <span onClick={() => setModalSearchActive(true)}>SEARCH</span>
          </div>
          <div className="Header_span">ACCOUNT</div>
          <div className="Header_span">
            <span onClick={() => setModalCartActive(true)}>YOUR CART</span>
          </div>
        </div>
      </div>
    </>
  );
}
