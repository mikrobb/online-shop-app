import React from "react";
import { useState } from "react";
import Header from "./CardsHtml/Header";
import { useParams } from "react-router";
import Footer from "./CardsHtml/Footer";
import "../CardsScc/Unit.css";
import { useDispatch, useSelector } from "react-redux";
import { setCartFavArr } from "../Store/reposReducer";

export default function Unit({
  setToLocalStorage,
  getFromLocalStorage,
  stafArr,
}) {
  const { id } = useParams();
  const unitObj = stafArr.filter(function (arr) {
    return arr.id == id;
  });
  const [view, setView] = useState("");
  const dispatch = useDispatch();
  const cartFavArr = useSelector((state) => state.repos.cartFavArr);

  function addToCart(unit) {
    if (cartFavArr.includes(unit)) {
      const newArray = cartFavArr.filter((item) => {
        return item.id !== unit.id;
      });
      dispatch(setCartFavArr(newArray));
      setToLocalStorage("cartArr", newArray);
    } else {
      const newArray = [...cartFavArr];
      newArray.push(unit);
      dispatch(setCartFavArr(newArray));
      setToLocalStorage("cartArr", newArray);
    }
  }

  console.log(cartFavArr);
  console.log(cartFavArr.includes(stafArr[0]));

  return (
    <>
      <div className="ShopHeader">
        <Header />
      </div>
      <div className="margins">
        <div>
          {unitObj.map((info) => (
            <div className="infoUnit">
              <div className="ImgBlocks">
                <div>
                  <div onClick={() => setView(info.img1)}>
                    <img
                      className={!info.img1 ? "blockImgBorder" : "blockImg"}
                      src={info.img1}
                      alt=""
                    />
                  </div>
                  <div onClick={() => setView(info.img2)}>
                    <img
                      className={!info.img2 ? "blockImgBorder" : "blockImg"}
                      src={info.img2}
                      alt=""
                    />
                  </div>
                  <div onClick={() => setView(info.img3)}>
                    <img
                      className={!info.img3 ? "blockImgBorder" : "blockImg"}
                      src={info.img3}
                      alt=""
                    />
                  </div>
                  <div onClick={() => setView(info.img4)}>
                    <img
                      className={!info.img4 ? "blockImgBorder" : "blockImg"}
                      src={info.img4}
                      alt=""
                    />
                  </div>
                  <div onClick={() => setView(info.img5)}>
                    <img
                      className={!info.img5 ? "blockImgBorder" : "blockImg"}
                      src={info.img5}
                      alt=""
                    />
                  </div>
                  <div onClick={() => setView(info.img6)}>
                    <img
                      className={!info.img6 ? "blockImgBorder" : "blockImg"}
                      src={info.img6}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <img
                    className="blockMainImg"
                    src={!view ? info.img1 : view}
                    alt=""
                  />
                </div>
              </div>
              <div className="unitInfo">
                <div className="unitName">{info.name}</div>
                <div className="inStock">In Stock</div>
                <div className="unitPrice">$ {info.price}.00</div>
                <div className="Tax">Tax included</div>
                <button onClick={() => addToCart(info)} className="addBtn">
                  {cartFavArr.includes(info)
                    ? "Delete from cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="aboutBlock">
          {unitObj.map((info) => (
            <>
              <div className="delailsBlock">PRODUCT DETAILS</div>
              <div className="allInfoBlock">
                <div className="aboutUnit">{info.info}</div>
                <div className="parametrsUnit">{info.parametrs}</div>
                <div className="aboutAll">
                  All products listed are vintage unless stated otherwise in the
                  description. These items are pre-loved and pre-worn, resulting
                  in small signs of wear and sometimes minor flaws. We think
                  this adds to their unique authenticity, but if an item has any
                  bigger flaws these will be pictured.
                </div>
                <div className="continuation">
                  If you require any further measurements or item information,
                  please contact us.
                </div>
              </div>
            </>
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
