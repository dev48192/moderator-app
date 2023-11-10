import React from "react";
import Styles from "./ProductCard.module.scss";
import Carousel from "../Carousel";
import RatingCount from "../RatingCount";
import If from "../Conditional/If";

const ProductCard: React.FC<{ product: any; selected: number }> = ({
  product,
  selected,
}) => {
  const productPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price);
  const getPickCategoryText = (categoryCode: number) => {
    switch (categoryCode) {
      case 1:
        return "Best";
      case 2:
        return "Upgrade";
      case 3:
        return "Eco";
      default:
        return null;
    }
  };
  return (
    <div className={Styles["product-card"]}>
      <If condition={!!selected}>
        <div className={Styles["pick-category-container"]}>
          <div className={Styles["pick-category-text"]}>
            {getPickCategoryText(selected)}
          </div>
          <div className={Styles["triangle"]}></div>
        </div>
      </If>
      <Carousel images={product.images} />
      <div className={Styles["product-details"]}>
        <div className={Styles["product-title"]}>{product.title}</div>
        <RatingCount
          id={product["asin_id"]}
          rating={product.rating}
          rating_count={product.rating_count}
        />
        <div className={Styles["product-price"]}>{productPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
