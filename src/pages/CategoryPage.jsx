import { NavLink, Outlet, Navigate } from "react-router-dom";

const CategoryPage = () => {
  // const navigate = useNavigate();
  // örnek
  // kullanıcı giriş yapmışsa sayfayı goster
  // sadece user adminse outlet i göster

  //   const user = {
  //     name: "ahmet",
  //     type: "user",
  //   };

  //   if (user.type !== "admin") {
  // kullanıcı admin değilse bu sayfayı gosterme
  // kullanıcıyı anasayfaya yonlendir
  // ? 1) HOOK KULLANIMI
  // navigate("/");
  // ? 2) BİLEŞEN KULLANIMI

  //     return <Navigate to={"/"} replace />;
  //   }

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className=" d-flex flex-column bg-white p-5 rounded">
        <NavLink to={"/kategori/hikaye"}>Hikaye</NavLink>
        <NavLink to={"/kategori/roman"}>Roman</NavLink>
      </aside>

      {/* ASIL SAYFA İÇERİĞİ */}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
