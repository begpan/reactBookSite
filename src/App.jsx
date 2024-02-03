import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    // tarayıcıdaki url e gore sayfalama yamamızı saglar

    <BrowserRouter>
      {/* butun sayfalarda ortak olanları routes dısına yazarız */}
      <div className="page">
        <Header />
        {/* routes: tarayıcıdaki url i izler url değiştiğinde 
    yol tanımladıgımız routelardan birinin path değeri ile eşleşirse
    ekrana o route ın elementini basar */}
        <Routes>
          {/* route :projedeki her sayfa için tanımlanır
        route a yol ve o yol için ekrana basılacak bileşeni veririz */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />
          {/* dinamik route */}
          <Route path="/ürün/:id" element={<ProductDetail />} />

          {/* nested route > iç içe yollar */}
          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          {/* tanımsız bir route yonkenirse */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
