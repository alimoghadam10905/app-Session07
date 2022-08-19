import React from "react";
import { GrCart } from "react-icons/gr";
import styles from "./ShoppingCartButton.module.scss"
const ShoppingCartButton = () => {
  return (
    < >
      <>
      <div className={`${styles.grCart } mx-2`} >
                <a href="#">
          <GrCart size="1.5em"/>
        </a>
      </div>

      </>
    </>
  );
};

export default ShoppingCartButton;
