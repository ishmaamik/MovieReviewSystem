import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../css/slider.module.css";

const Slider = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:8080/api/movies");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Duplicate the products for seamless looping
  const duplicatedProducts = [...products, ...products];

  return (
    <div className={styles["slider-wrapper"]}>
      <div className={styles["product-container"]}>
        {duplicatedProducts.map((product, index) => (
          <ProductCard 
            key={`${product.id}-${index}`} 
            image={product.poster} 
            title={product.title} 
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;