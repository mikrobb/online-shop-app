import React from "react";
import { useState } from "react";
import "C:/Users/Mikrob/Desktop/Online shop project/streetwear-shop-appnpx/src/CardsScc/CardsModal/ModalSeacrch.css";
import { stafArr } from "../../App";
import { Link } from "react-router-dom";

export default function ModalSearch({ active, setActive }) {
  const [search, setSeacrh] = useState("none");

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="titleSearch">What are you looking for?</div>
          <div>
            <input
              onChange={(e) => setSeacrh(e.target.value)}
              className="inpSearch"
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="mainModalBlocks">
            {stafArr
              .filter((unit) =>
                unit.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((unit) => (
                <div className="modalBlock">
                  <div>
                    <img className="modalImg" src={unit.img1} alt="" />
                  </div>
                  <div>
                    <div className="modalName">
                      <Link className="modalLinks" to={`/shop/${unit.id}`}>
                        {unit.name}
                      </Link>
                    </div>
                    <div className="modalPrice">$ {unit.price}.00</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
