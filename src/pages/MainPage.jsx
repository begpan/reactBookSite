// import etmezsek src kısmına /wlcome.gi yazılrı
import { Link } from "react-router-dom";
import gif from "../assets/welcome.gif";

import React from "react";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Hoşgeldiniz</h1>

      <img className="img-fluid rounded" src={gif} alt="" />
      <p>
        <Link to={"/ürünler"}>Ürünler sayfasında</Link> yeni çıkan bütün
        kitaplara ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
