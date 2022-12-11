import React from "react";
import { Link } from "react-router-dom";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CadrsSccHtml/Header.css";
import { useState } from "react";
import ModalSearch from "../CardsModal/ModalSearch";
import ModalCart from "../CardsModal/ModalCart";
import { useSelector } from "react-redux";
import search from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/icons/search.png";
import user from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/icons/user.png";
import cart from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/icons/cart.png";
import menu from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/icons/menu.png";
import ModalMenu from "../CardsModal/ModalMenu";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default function Header() {
  const [modalSearchActive, setModalSearchActive] = useState();
  const [modalCartActive, setModalCartActive] = useState();
  const [modalMenuActive, setModalMenuActive] = useState();
  const loginState = useSelector((state) => state.repos.login);
  const cartFavArr = useSelector((state) => state.repos.cartFavArr);

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
      <ModalMenu active={modalMenuActive} setActive={setModalMenuActive} />
      <div className="Header_main_block">
        <div className="Header_block">
          <div className="Header_span modalMenuActive">
            <img
              onClick={() => setModalMenuActive(true)}
              className="fontAwesomeIcons"
              src={menu}
              alt="Menu"
            />
          </div>
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
          <Link className="links" to="/">
            <div className="Title_span">Mikrob's Vintage</div>
          </Link>
        </div>
        <div className="Header_block iconsBlock">
          <div className="Header_span_icon">
            <img
              className="fontAwesomeIcons"
              onClick={() => setModalSearchActive(true)}
              src={search}
              alt="Search"
            />
          </div>

          <Link className="links" to="/account">
            <img
              className={
                loginState == null
                  ? "none"
                  : "Header_span_icon fontAwesomeIcons"
              }
              src={user}
              alt="Account"
            />
          </Link>

          <div className="Header_span_icon">
            <img
              className="fontAwesomeIcons"
              onClick={() => setModalCartActive(true)}
              src={cart}
              alt="Cart"
            />
            <span className="countCartArr">{cartFavArr.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
