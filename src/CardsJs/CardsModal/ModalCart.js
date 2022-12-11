import React from "react";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CardsModal/ModalCart.css";
import { stafArr } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCartFavArr } from "../../Store/reposReducer";
import close from "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/img/icons/close.png";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export default function ModalCart({ active, setActive }) {
  const cartFavArr = useSelector((state) => state.repos.cartFavArr);
  const dispatch = useDispatch();

  const cartArrays = [];
  cartFavArr.map((unit) => {
    stafArr.map((item) => {
      if (item.name.includes(unit)) {
        cartArrays.push(item);
      } else {
        return;
      }
    });
  });

  function deleteCart(unit) {
    const newArray = cartFavArr.filter((item) => {
      return item !== unit.name;
    });
    dispatch(setCartFavArr(newArray));
    setToLocalStorage("cartArr", newArray);
  }

  let totalCout = 0;
  cartArrays.map((unit) => {
    totalCout += unit.price;
  });

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
          <div className="TitleAndClose">
            <div>Your Cart</div>
            <div onClick={() => setActive(false)}>
              <img className="closeIcon" src={close} alt="Close" />
            </div>
          </div>

          <hr />
          <div className={!cartArrays[0] ? "displayBlockText" : "displayText"}>
            You don't have any items in your cart.
          </div>
          <div>
            {cartArrays.map((unit) => (
              <div key={unit.id}>
                <div className="cartMainBlocks">
                  <div>
                    <img className="imgCart" src={unit.img1} alt="" />
                  </div>
                  <div className="cartInfoBlock">
                    <div className="cartName">{unit.name}</div>
                    <div className="cartPticeDelete">
                      <div className="cartPrice">${unit.price}</div>
                      <div
                        onClick={() => deleteCart(unit)}
                        className="btnDelete"
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <div className={!cartArrays[0] ? "display" : "displayBlock"}>
              <div className="mainTotalCount">
                <div>SUBTOTAL:</div>
                <div>${totalCout}.00</div>
              </div>
              <div className="descrip">
                Shipping & taxes calculated at checkout
              </div>
              <div className="btnBuy">PROCEED TO CHECKOUT</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
