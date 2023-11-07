import React, { useState } from "react";
import "../assets/css/Product.css";

const Product = ({
  id,
  brand,
  desc,
  price,
  img,
  sepet,
  setSepet,
  sepetMiktar,
  setSepetMiktar,
}) => {
  const [sepetDurum, setSepetDurum] = useState(false);

  const handleEkle = () => {
    setSepetDurum(true);
    setInterval(() => {
      setSepetDurum(false);
    }, 2000);
    const newProduct = {
      id: id,
      brand: brand,
      desc: desc,
      price: price,
      img: img,
    };

    const yeniSepet = [...sepet, newProduct];
    setSepet(yeniSepet);
    setSepetMiktar(sepetMiktar + 1);
    localStorage.setItem("sepetMiktari", sepetMiktar + 1);
    console.log("Sepet Elemanları:", sepet);
    console.log("Sepet Miktarı:", sepetMiktar);
  };
  return (
    <div className="main">
      <img src={img} alt="sucuk" />
      <p>
        <strong>{brand}</strong>
      </p>
      <small>{desc}</small>
      <p>
        <strong>{price}</strong>
      </p>
      <button onClick={handleEkle}>
        {sepetDurum === false ? "Sepete Ekle" : "Sepete Eklendi"}
      </button>
    </div>
  );
};

export default Product;
