import React from "react";
import { Link } from "react-router-dom";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CadrsSccHtml/Header.css";
import { useState } from "react";
import ModalSearch from "../CardsModal/ModalSearch";
import ModalCart from "../CardsModal/ModalCart";
import { useSelector } from "react-redux";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default function Header() {
  const [modalSearchActive, setModalSearchActive] = useState();
  const [modalCartActive, setModalCartActive] = useState();
  const loginState = useSelector((state) => state.repos.login);

  console.log(loginState == null);

  function logout() {
    setToLocalStorage("login", null);
    setToLocalStorage("password", null);
    window.location.reload();
  }

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
            <div className={loginState !== null ? "none" : "Header_span"}>
              LOGIN
            </div>
          </Link>
          <div
            onClick={() => logout()}
            className={loginState == null ? "none" : "Header_span"}
          >
            LOGOUT
          </div>
        </div>
        <div className="Header_block">
          <div className="Title_span">Mikrob's Vintage</div>
        </div>
        <div className="Header_block">
          <div className="Header_span">
            <span onClick={() => setModalSearchActive(true)}>SEARCH</span>
          </div>
          <Link className="links" to="/account">
            <div className={loginState == null ? "none" : "Header_span"}>
              ACCOUNT
            </div>
          </Link>
          <div className="Header_span">
            <span onClick={() => setModalCartActive(true)}>YOUR CART</span>
          </div>
        </div>
      </div>
    </>
  );
}
