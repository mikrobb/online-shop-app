import React from "react";
import { Link } from "react-router-dom";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CadrsSccHtml/Header.css";
import { useState } from "react";
import ModalSearch from "../CardsModal/ModalSearch";
import ModalCart from "../CardsModal/ModalCart";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default function Header() {
  const [modalSearchActive, setModalSearchActive] = useState();
  const [modalCartActive, setModalCartActive] = useState();
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
            <FontAwesomeIcon
              className="fontAwesomeIcons"
              onClick={() => setModalSearchActive(true)}
              icon={solid("magnifying-glass")}
            />
          </div>
          <Link className="links" to="/account">
            <FontAwesomeIcon
              className={
                loginState == null ? "none" : "Header_span fontAwesomeIcons"
              }
              icon={solid("user")}
            />
          </Link>
          <div className="Header_span">
            <FontAwesomeIcon
              className="fontAwesomeIcons"
              onClick={() => setModalCartActive(true)}
              icon={solid("cart-shopping")}
            />
            <span className="countCartArr">{cartFavArr.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
