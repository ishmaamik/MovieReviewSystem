import styles from "../css/product.module.css";

const ProductCard = ({ image, title }) => {
  return (
    <>
      <div className={styles["inner-container"]}>
        <img src={image} alt={title} className={styles["image-container"]} />
        <span>{title}</span>
      </div>
    </>
  );
};

export default ProductCard;
