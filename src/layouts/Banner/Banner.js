import React from 'react'
import styles from "./Banner.module.scss";
const Banner = () => {
    const banners = [
        {
           id:1, 
          banner:
            "https://dkstatics-public.digikala.com/digikala-adservice-banners/6f321832856a7ec2a2fcde4e4d6f2899606fd9cf_1632395144.jpg?x-oss-process=image/quality,q_80",
        },
        {
            id:2,
            banner:
            "https://dkstatics-public.digikala.com/digikala-adservice-banners/d0ce66f275a1267d85257c377831fc2efbe0e0ef_1632316441.jpg?x-oss-process=image/quality,q_80",
        },

      ];
  return (
    <>
      <div className={`${styles.banner}`}>
      <div className="container">
          <div className={`${styles.bannerContent}`}>

          {banners.map((item) => {
            return (
                <div className={`${styles.bannerItem}`} key={item.id}>
                       <div className={`${styles.bannerCard}`}>
                           <a href='#'>
                            <img src={item.banner}/>
                           </a>
                       </div>
                </div>
            );
          })}


          </div>
          </div>
      </div>
    </>
  )
}

export default Banner
