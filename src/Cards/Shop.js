import React from "react";
import Header from "./CardsHtml/Header";
import Footer from "./CardsHtml/Footer";
import "../CardsScc/Shop.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Shop(stafArr) {
  const [checked, setChecked] = useState("All");

  function isChecked(value) {
    setChecked(value);
    console.log(checked);
  }

  return (
    <>
      <div className="ShopHeader">
        <Header />
      </div>
      <div className="margins">
        <section>
          <div className="mainSectionBlocks">
            <div className="Categories">
              <div className="titleBlock">Categories</div>
              <div>
                <form>
                  <div
                    style={{ marginBottom: "50px", marginTop: "50px" }}
                    className="inpBlock"
                  >
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="All"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="All"
                    >
                      Shop-All
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Accessories"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Accessories"
                    >
                      Accessories
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Bags"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Bags"
                    >
                      Bags
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Bottoms"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Bottoms"
                    >
                      Bottoms
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Dresses"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Dresses"
                    >
                      Dresses
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Fleeces"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Fleeces"
                    >
                      Fleeces
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Gilets"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Gilets"
                    >
                      Gilets
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Hats"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Hats"
                    >
                      Hats
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Jackets"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Jackets"
                    >
                      Jackets
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Polo"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Polo"
                    >
                      Polo Shirts
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Zips"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Zips"
                    >
                      Quater Zips
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Scarfs"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Scarfs"
                    >
                      Scarfs
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Shirts"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Shirts"
                    >
                      Shirts
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Shoes"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Shoes"
                    >
                      Shoes
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="Sweatshirts"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="Sweatshirts"
                    >
                      Sweatshirts
                    </label>
                  </div>
                  <div className="inpBlock">
                    <input
                      onClick={(event) => isChecked(event.target.id)}
                      type="radio"
                      name="categoria"
                      id="T-Shirts"
                    />
                    <label
                      onClick={(event) => isChecked(event.target.for)}
                      for="T-Shirts"
                    >
                      T-Shirts
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="unitBlocks">
              {stafArr.stafArr
                .filter(
                  (categoria) =>
                    categoria.categoria[0] == checked ||
                    categoria.categoria[1] == checked
                )
                .map((unit) => (
                  <div className="unitBlock">
                    <img src={unit.img1} alt="" />
                    <span className="nameProduct">
                      <Link className="blackLinks" to={`/shop/${unit.id}`}>
                        {unit.name}
                      </Link>
                    </span>
                    <span className="priceProduct">$ {unit.price}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
