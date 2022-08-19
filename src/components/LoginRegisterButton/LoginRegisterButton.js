import React, { useEffect, useState } from "react";
import styles from "./LoginRegisterButton.module.scss";
import { GrLogin } from "react-icons/gr";
const LoginRegisterButton = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    console.log("useeffect ejra shod");
  }, []);

  return (
    <>
      <div className={`${styles.loginSite}`}>
        <a href="#">
          {!isUserLoggedIn ? <span>ورود | ثبت نام <GrLogin size="1.5em"/></span> : <span>مشاهده پروفایل</span>}
        </a>
      </div>
    </>
  );
};

export default LoginRegisterButton;
