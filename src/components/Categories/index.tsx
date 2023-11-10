import React, { useMemo, useState } from "react";
import Styles from "./Categories.module.scss";
import CaretDownIcon from "../../assets/CaretDownIcon";
import If from "../Conditional/If";
import Collapsible from "./Collapsible";

const Categories: React.FC<{
  categories: any;
}> = ({ categories }) => {
  const isChildExist = useMemo(
    () => categories["childs"] && categories["childs"].length > 0,
    [categories]
  );
  return (
    <div className={Styles["category"]}>
      <Collapsible title={categories["category_name"]}>
        {categories["childs"] &&
          categories["childs"].length > 0 &&
          categories["childs"].map((category, index) => (
            <Categories
              key={`${category["category_id"]}-${index}`}
              categories={category}
            />
          ))}
      </Collapsible>
    </div>
  );
};

export default Categories;
