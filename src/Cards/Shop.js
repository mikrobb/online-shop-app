import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../CardsScc/Shop.css";
import { stafArr } from "../imports";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div className="ShopHeader">
        <Header />
      </div>
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
                  <input type="radio" name="categoria" id="All" />
                  <label for="All">Shop-All</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Accessories" />
                  <label for="Accessories">Accessories</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Bags" />
                  <label for="Bags">Bags</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Bottoms" />
                  <label for="Bottoms">Bottoms</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Dresses" />
                  <label for="Dresses">Dresses</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Fleeces" />
                  <label for="Fleeces">Fleeces</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Gilets" />
                  <label for="Gilets">Gilets</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Hats" />
                  <label for="Hats">Hats</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Jackets" />
                  <label for="Jackets">Jackets</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Polo" />
                  <label for="Polo">Polo Shirts</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Zips" />
                  <label for="Zips">Quater Zips</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Scarfs" />
                  <label for="Scarfs">Scarfs</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Shirts" />
                  <label for="Shirts">Shirts</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Shoes" />
                  <label for="Shoes">Shoes</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="Sweatshirts" />
                  <label for="Sweatshirts">Sweatshirts</label>
                </div>
                <div className="inpBlock">
                  <input type="radio" name="categoria" id="T-Shirts" />
                  <label for="T-Shirts">T-Shirts</label>
                </div>
              </form>
            </div>
          </div>
          <div className="unitBlocks">
            {stafArr.map((unit) => (
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
    </>
  );
}
