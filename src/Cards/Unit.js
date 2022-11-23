import React from "react";
import Header from "./Header";
import { useParams } from "react-router";
import Footer from "./Footer";

export default function Unit() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
