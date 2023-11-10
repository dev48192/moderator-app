import React, { useEffect, useState } from "react";
import Styles from "./SideBar.module.scss";
import { fetchCategories } from "../../mock/categories";
import Categories from "../Categories";

const SideBar: React.FC = () => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedAccrodions, setExpandedAccordions] = useState({});

  const handleShowDetails = (index: string) => {
    const tempPanelDetails = { ...expandedAccrodions };
    tempPanelDetails[index] = !tempPanelDetails[index];
    setExpandedAccordions({ ...tempPanelDetails });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("API call failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;

  return (
    <div className={Styles["side-bar-content"]}>
      <Categories categories={categories} />
    </div>
  );
};

export default SideBar;
