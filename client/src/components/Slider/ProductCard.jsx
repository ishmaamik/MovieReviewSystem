import { Link } from "react-router-dom";
import styles from "../../css/product.module.css";

const ProductCard = ({ image, title }) => {
  return (
    <>
      <Link to={`/MovieProfile/${title}`} className={styles["inner-container"]}>
        <img src={image} alt={title}  className={styles["image-container"]} />
        <span to={`/MovieProfile/${title}`} style={{color:"white"}}>{title}</span>
      </Link>
    </>
  );
};

export default ProductCard;
