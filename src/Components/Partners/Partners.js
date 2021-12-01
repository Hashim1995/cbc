import { React, useEffect, useState } from "react";
import Style from "./Partners.module.css";
import p1 from "../../Assets/Img/p1.png";
import p2 from "../../Assets/Img/p2.png";
import p3 from "../../Assets/Img/p3.png";
import p4 from "../../Assets/Img/p4.png";
import p5 from "../../Assets/Img/p5.png";
import p6 from "../../Assets/Img/p6.png";
import p7 from "../../Assets/Img/p7.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
const Partners = () => {
  const [screenIsXS, setScreenIsXS] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 576) setScreenIsXS(true);
    else {
      setScreenIsXS(false);
    }
  }, []);

  SwiperCore.use([Autoplay]);
  return (
    <div className={Style.PartnersWrap}>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={screenIsXS ? 1 : 4}
      >
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p2}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p3}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p4}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p5}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p6}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.PartnersImgWrap}>
            <img
              className={Style.PartnersImg}
              style={{ objectFit: "contain" }}
              alt=""
              src={p7}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
