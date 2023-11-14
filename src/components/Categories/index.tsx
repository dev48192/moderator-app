import React from "react";
import Styles from "./Categories.module.scss";
import Collapsible from "./Collapsible";

const Categories: React.FC<{
  categories: any;
}> = ({ categories }) => {
  return (
    <div className={Styles["category"]}>
      <Collapsible
        header={
          <div className={Styles["category-title-container"]}>
            <div className={true && Styles["category-title-bold"]}>
              {categories["category_name"]}
            </div>
            {categories['status'] === 'DRAFT' ? (
              <div title="Unpublished" className={Styles["category-status-unpublished"]}>U</div>
            ) : (
              <div title="Published" className={Styles["category-status-published"]}>P</div>
            )}
          </div>
        }
      >
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
