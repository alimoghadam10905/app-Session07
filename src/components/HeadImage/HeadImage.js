import React from "react";
import ImageTop from "./imageTop.jpg";
import style from "./HeadImage.module.scss";
const HeadImage = () => {
  return (
    <>
      <div className={`${style.headImage} head-image`}>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d067e910bd4185e03bb51491eb6fd2c3c2e0013f_1660828255.jpg?x-oss-process=image/quality,q_95"
          alt="image top"
        />
      </div>
    </>
  );
};

export default HeadImage;
