import React from "react";
import LoginRegisterButton from "../../components/LoginRegisterButton/LoginRegisterButton";
import LogoSite from "../../components/LogoSite/LogoSite";
import HeadImage from "../../components/HeadImage/HeadImage";
import SearchBox from "../../components/SearchBox/SearchBox";
import ShoppingCartButton from "../../components/ShoppingCartButton/ShoppingCartButton";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <header>
        <div className="image-head-link">
          <HeadImage/>
        </div>
        <div className={`${styles.bg_header}`}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="head-left d-flex justify-content-between align-items-center">
                <ShoppingCartButton />
                <LoginRegisterButton />
              </div>
              <div className="head-right">
                <LogoSite/>
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
