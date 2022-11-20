import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header_main_block">
      <div className="Header_block">
        <Link className="links" to="/">
          <div className="Header_span">HOME</div>
        </Link>
        <Link className="links" to="/shop">
          <div className="Header_span">SHOP</div>
        </Link>
        <Link className="links" to="/login">
          <div className="Header_span">LOGIN</div>
        </Link>
      </div>
      <div className="Header_block">
        <div className="Title_span">SerjixVintage</div>
      </div>
      <div className="Header_block">
        <div className="Header_span">SEARCH</div>
        <div className="Header_span">ACCOUNT</div>
        <div className="Header_span">YOUR CART</div>
      </div>
    </div>
  );
}
