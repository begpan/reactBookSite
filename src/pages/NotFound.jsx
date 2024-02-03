import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <div className="container py-6">
      <img
        style={{ maxWidth: "400px" }}
        className="img-fluid rounded text-center"
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
        alt=""
      />
      <p className="text-center fs-3 my-4">Üzgünüz sayfa bulunamadı</p>
      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          Anasayfa
        </Link>
      </div>

      {state && (
        <p className="fs-3 text-center my-4">
          Hata kodunuz <span className="badge bg-warning mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
