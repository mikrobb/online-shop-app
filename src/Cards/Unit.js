import React from "react";
import Header from "./Header";
import { useParams } from "react-router";
import Footer from "./Footer";
import "../CardsScc/Unit.css";

export default function Unit(stafArr) {
  const { id } = useParams();
  const unitObj = stafArr.stafArr.filter(function (arr) {
    return arr.id == id;
  });
  let view = "";

  function viewImg(img) {
    view = img;
    console.log(view);
  }
  return (
    <>
      <div className="ShopHeader">
        <Header />
      </div>
      <div>
        {unitObj.map((info) => (
          <div className="infoUnit">
            <div className="ImgBlocks">
              <div>
                <div onClick={() => viewImg(info.img1)}>
                  <img className="blockImg" src={info.img1} alt="" />
                </div>
                <div onClick={() => viewImg(info.img2)}>
                  <img className="blockImg" src={info.img2} alt="" />
                </div>
                <div onClick={() => viewImg(info.img3)}>
                  <img className="blockImg" src={info.img3} alt="" />
                </div>
                <div onClick={() => viewImg(info.img4)}>
                  <img className="blockImg" src={info.img4} alt="" />
                </div>
                <div onClick={() => viewImg(info.img5)}>
                  <img className="blockImg" src={info.img5} alt="" />
                </div>
                <div onClick={() => viewImg(info.img6)}>
                  <img className="blockImg" src={info.img6} alt="" />
                </div>
              </div>
              <div>
                <img className="blockMainImg" src={view} alt="" />
              </div>
            </div>
            <div>
              <div>{info.name}</div>
              <div>In Stock</div>
              <div>$ {info.price}</div>
              <div>Tax included</div>
              <div>Add to card</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
