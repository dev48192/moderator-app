import React from "react";
import Styles from './ProductCard.module.scss';
import Carousel from "../Carousel";
import RatingCount from "../RatingCount";

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const productPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(product.price);
  return (
    <div className={Styles["product-card"]}>
      <Carousel images={product.images} />
      <p className={Styles['product-title']}>{product.title}</p>
      <div className={Styles['product-details']}>
        <RatingCount id={product['asin_id']}  rating={product.rating} rating_count={product.rating_count} />
        <div>{productPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
