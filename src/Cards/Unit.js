import React from "react";
import Header from "./Header";
import { useParams } from "react-router";

export default function Unit() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header />
    </div>
  );
}
