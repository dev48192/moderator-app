import React, { useEffect, useState } from "react";
import Styles from "./ProductSuggestions.module.scss";
import { fetchProductsByCategory } from "../../mock/productList";
import ProductCard from "../ProductCard";
import get from "lodash/get";
import Dropdown from "../Dropdown";
import { PickCategoryOptions } from "./constants";
import If from "../Conditional/If";

const ProductSuggestions: React.FC = () => {
  const [allProductsInfo, setAllProductsInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [pickCategory, setPickCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductsByCategory();
        setAllProductsInfo(response.data);
      } catch (error) {
        console.error("API call failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProductSelectedDetails = (id) => {
    if (get(allProductsInfo, "published.best_picks", []).includes(id)) {
      return 1;
    }
    if (get(allProductsInfo, "published.upgrade_picks", []).includes(id)) {
      return 2;
    }
    if (get(allProductsInfo, "published.eco_picks", []).includes(id)) {
      return 3;
    }

    return 0;
  };

  if (loading) return null;

  return (
    <div className={Styles["product-suggestions-content"]}>
      <div className={Styles["pick-category-container"]}>
        <div className={Styles["pick-category-label"]}>Select an option:</div>
        <Dropdown
          className={Styles["pick-category-dropdown"]}
          options={PickCategoryOptions}
          selectedValue={pickCategory}
          onChange={(val) => setPickCategory(val.displayName)}
        />
        <If condition={!!pickCategory}>
          <div className={Styles["selected-details"]}>
            You selected: {pickCategory}
          </div>
        </If>
      </div>
      <div className={Styles["product-grid"]}>
        {allProductsInfo["products"]?.map((product, index) => (
          <ProductCard
            key={`${product["asin_id"]}-${index}`}
            product={product}
            selected={getProductSelectedDetails(product["asin_id"])}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestions;
