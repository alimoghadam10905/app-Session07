import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const SlideShow = () => {
  const images = [
    {
       id:1, 
      original:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/dba0eda389b09aac09f26780147cd517daeb4d18_1660563408.jpg?x-oss-process=image/quality,q_95",
    },
    {
        id:2,
      original:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/710f446d77c9593b08a04d5ccbc3f080ab07772b_1660737429.jpg?x-oss-process=image/quality,q_95",
    },
    {
        id:3,
      original:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/a9f66eff84235b10501747500ac0584951706532_1660466669.jpg?x-oss-process=image/quality,q_95",
    },
  ];

  return (
    <>
      <div className="sliderSwiper">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {images.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.original} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SlideShow;
