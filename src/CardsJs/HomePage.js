import React from "react";
import "../CardsScc/HomePage.css";
import { Link } from "react-router-dom";

import block1 from "../img/Block1.png";
import block2 from "../img/Block2.png";
import block3 from "../img/Block3.png";
import block4 from "../img/Block4.png";
import block5 from "../img/Block5.png";
import block6 from "../img/Block6.png";

import Header from "./CardsHtml/Header";
import Footer from "./CardsHtml/Footer";

export default function HomePage() {
  return (
    <>
      <header className="Slider_block">
        <Header />
        <Link className="linksHomePage" to="/shop">
          <div className="Btn_shop">SHOP NOW</div>
        </Link>
      </header>

      <h2 className="Arr_block_title">NEW ARRIVALS</h2>

      <section className="Section_Blocks_Sale">
        <div className="Block_Sale">
          <div className="Block_Img">
            <Link to="/shop/8" className="nameLink">
              <img
                src={block1}
                alt="Adidas Planet Big Logo"
                className="Block_Sale_Img"
              />
            </Link>
          </div>
          <span>
            <Link to="/shop/8" className="nameLink">
              Vintage 90s Adidas Planet Big Logo Track Jacket
            </Link>
          </span>
          <span className="Price_Sale">$43.00</span>
        </div>
        <div className="Block_Sale">
          <div className="Block_Img">
            <Link to="/shop/16" className="nameLink">
              <img
                src={block2}
                alt="Aquascutum House Check T-Shirt"
                className="Block_Sale_Img"
              />
            </Link>
          </div>
          <span>
            <Link to="/shop/16" className="nameLink">
              Vintage White Aquascutum House Check T-Shirt
            </Link>
          </span>
          <span className="Price_Sale">$37.00</span>
        </div>
        <div className="Block_Sale">
          <div className="Block_Img">
            <Link to="/shop/15" className="nameLink">
              <img
                src={block4}
                alt="World Cup 1998 England Bully"
                className="Block_Sale_Img"
              />
            </Link>
          </div>
          <span>
            <Link to="/shop/15" className="nameLink">
              Vintage 1998 World Cup England Bully T-Shirt
            </Link>
          </span>
          <span className="Price_Sale">$43.00</span>
        </div>
        <div className="Block_Sale">
          <div className="Block_Img">
            <Link to="/shop/17" className="nameLink">
              <img
                src={block5}
                alt="Grey Hard Rock Cafe Bangkok"
                className="Block_Sale_Img"
              />
            </Link>
          </div>
          <span>
            <Link to="/shop/17" className="nameLink">
              Vintage 90s Grey Hard Rock Cafe Bangkok T-Shirt
            </Link>
          </span>
          <span className="Price_Sale">$31.00</span>
        </div>
      </section>
      <Link className="linksHomePage" to="/shop">
        <div className="Btn_shop_View">VIEW ALL</div>
      </Link>
      <div className="Slider_Block_Second"></div>

      <section>
        <div className="Categories_Blocks">
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block3} alt="Sweatshirts" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">Sweatshirts</div>
          </div>
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block6} alt="Fleeces" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">Fleeces</div>
          </div>
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block2} alt="T-Shirt" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">T-shirts</div>
          </div>
          <div className="Ctegoies_block">
            <div className="Block_Img">
              <img src={block1} alt="Jacets" className="Block_Sale_Img" />
            </div>
            <div className="Categoria">Jackets</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
