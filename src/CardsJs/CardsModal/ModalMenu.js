import React from "react";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CardsModal/ModalMenu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import close from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/icons/close.png";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default function ModalMenu({ active, setActive }) {
  const loginState = useSelector((state) => state.repos.login);

  function logout() {
    setToLocalStorage("login", null);
    setToLocalStorage("password", null);
    window.location.reload();
  }

  return (
    <div
      className={active ? "modal active" : "modalMenu"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content_Menu" onClick={(e) => e.stopPropagation()}>
        <div className="menuBtnsBlocks">
          <div className="CloseMenu">
            <div>Menu</div>
            <div className="close" onClick={() => setActive(false)}>
              <img className="closeIcon" src={close} alt="Close" />
            </div>
          </div>
          <Link className="blackLinks" to="/">
            <div className="btnBlock">HOME</div>
          </Link>
          <Link className="blackLinks" to="/shop">
            <div className="btnBlock">SHOP</div>
          </Link>
          <Link className="blackLinks" to="/login">
            <div className={loginState !== null ? "none" : "btnBlock"}>
              LOGIN
            </div>
          </Link>
          <div
            onClick={() => logout()}
            className={loginState == null ? "none" : "btnBlock blackLinks"}
          >
            LOGOUT
          </div>
        </div>
      </div>
    </div>
  );
}
