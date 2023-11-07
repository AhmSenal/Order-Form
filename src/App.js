import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import sucuk from "./assets/images/sucuk.jpg";
import pastirma from "./assets/images/pastirma.jpg";
import sosis from "./assets/images/sosis.jpg";
import a4 from "./assets/images/ve-ge_a4.jpg";
import nikeAyakkabi from "./assets/images/nike_Defyallday.jpg";
import nikeCanta from "./assets/images/nike_Ba5876.jpg";
import clear from "./assets/images/clear_men_sampuan.jpg";
import bagaj from "./assets/images/öz-is bmw bagaj.jpg";
import versace from "./assets/images/versace_eros.jpg";
import kitap from "./assets/images/kitap.jpg";
import icon from "./assets/images/basket.svg";
import "./assets/css/App.css";

const urunler = [
  {
    id: new Date().getTime(),
    brand: "Pınar",
    desc: "Gurme Sucuk 250gr",
    price: 179.9,
    img: sucuk,
  },
  {
    id: new Date().getTime(),
    brand: "Karaca",
    desc: "Geleneksel Yağsız Pastırma 500 gr",
    price: 485.1,
    img: pastirma,
  },
  {
    id: new Date().getTime(),
    brand: "Bratwurst",
    desc: "Dana Sosis 1000 Gr",
    price: 409.9,
    img: sosis,
  },
  {
    id: new Date().getTime(),
    brand: "Ve-Ge",
    desc: "Copier Bond A4 80 G/m² 500 Adet Fotokopi Kağıdı",
    price: 94.90,
    img: a4,
  },
  {
    id: new Date().getTime(),
    brand: "Nike",
    desc: "Defyallday DJ1196-100 Beyaz Erkek Ayakkabı",
    price: 2313.22,
    img: nikeAyakkabi
  },
  {
    id: new Date().getTime(),
    brand: "Nike",
    desc: "Ba5876 082 Elmntl Bp Sırt Ve Okul Çantası 48 X 30 X 15 Cm",
    price: 499.99,
    img: nikeCanta
  },
  {
    id: new Date().getTime(),
    brand: "Clear",
    desc: "Men Kepeğe Karşı Etkili Şampuan Cool Sport Menthol 600",
    price: 114.90,
    img: clear
  },
  {
    id: new Date().getTime(),
    brand: "Öz-İş ",
    desc: "BMW 4 Gran Coupe Halı Bagaj Havuzu F36 (2014-2020 Arası)",
    price: 894.24,
    img: bagaj
  },
  {
    id: new Date().getTime(),
    brand: "Versace",
    desc: "Eros Edp 100 ml Erkek Parfümü",
    price: 2475.00,
    img: versace
  },
  {
    id: new Date().getTime(),
    brand: "Hayykitap",
    desc: "Benim Güzel Hatalarım - Mehmet Ali Kılınç",
    price: 48.75,
    img: kitap
  }
];

function App() {
  const [sepet, setSepet] = useState([]);
  const [sepetMiktar, setSepetMiktar] = useState(0);

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem("sepetMiktari");
    if (fromLocalStorage === null) {
      localStorage.setItem("sepetMiktari", JSON.stringify(0));
    } else {
      setSepetMiktar(JSON.parse(fromLocalStorage));
    }
  }, []);

  return (
    <div className="container text-center">
      <section className="header">
        <div className="links">
          <a href="#top" className="headerLink">
            Anasayfa
          </a>
          <a href="#top" className="headerLink">
            Kurumsal
          </a>
          <a href="#top" className="headerLink">
            Galeri
          </a>
          <a href="#top" className="headerLink">
            Menü
          </a>
          <a href="#top" className="headerLink">
            Sipariş
          </a>
          <a href="#top" className="headerLink">
            İletişim
          </a>
        </div>
        <div className="headerRight">
          <a href="#top" className="alink">
            <img className="icon" src={icon} alt="" />
            <div className="miktar">{sepetMiktar}</div>
            Sepetim
          </a>
        </div>
      </section>

      <h1 className="my-5">Sipariş İşlemleri</h1>
      <div className="mainCard">
        {urunler.map((urun, index) => (
          <div key={index}>
            <Product
              img={urun.img}
              brand={urun.brand}
              desc={urun.desc}
              price={urun.price}
              id={urun.id}
              sepet={sepet}
              setSepet={setSepet}
              sepetMiktar={sepetMiktar}
              setSepetMiktar={setSepetMiktar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
