import React, { useState } from "react";
import Styles from "./Carousel.module.scss";
import If from "../Conditional/If";
import Unless from "../Conditional/Unless";
import CaretDownIcon from "../../assets/CaretDownIcon";

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImageId, setCurrentImageId] = useState(0);
  const goToNextImage = () => {
    if (currentImageId === images.length - 1) {
      setCurrentImageId(0);
      return;
    }
    setCurrentImageId(currentImageId + 1);
  };
  const goToPrevImage = () => {
    if (currentImageId === 0) {
      setCurrentImageId(images.length - 1);
      return;
    }
    setCurrentImageId(currentImageId - 1);
  };
  return (
    <>
      <If condition={images.length > 1}>
        <div className={Styles["carousel-container"]}>
          <button className={Styles["action-button"]} onClick={goToPrevImage}>
            <CaretDownIcon className={Styles["caret-left-icon"]} />
          </button>
          <img width={200} src={images[currentImageId]} />
          <button className={Styles["action-button"]} onClick={goToNextImage}>
            <CaretDownIcon className={Styles["caret-right-icon"]} />
          </button>
        </div>
      </If>
      <Unless condition={images.length > 1}>
        <div className={Styles["single-image"]}>
          <img
            width={200}
            src={images[0] || "https://i.imgur.com/1twoaDy.jpeg"}
          />
        </div>
      </Unless>
    </>
  );
};

export default Carousel;
