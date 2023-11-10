import React from "react";
import Styles from './ProductCard.module.scss';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div key={product.id} className={Styles["product-card"]}>
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
