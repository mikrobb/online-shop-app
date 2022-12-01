import React from "react";
import { useState } from "react";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CardsModal/ModalCart.css";
import { stafArr } from "../../App";
import { Link } from "react-router-dom";

export default function ModalCart({ active, setActive }) {
  return (
    <>
      <div
        className={active ? "modalCart active" : "modalCart"}
        onClick={() => setActive(false)}
      >
        <div
          className="modalCart__content"
          onClick={(e) => e.stopPropagation()}
        >
          <div>Your Cart</div>
          <hr />
        </div>
      </div>
    </>
  );
}
