import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/banner.scss";

import fotoBanner1 from "../assets/img/red-bull-wololo-iii-imagen.avif"
import fotoBanner2 from "../assets/img/Banner1.png"
import fotoBanner3 from "../assets/img/inove.jpg"

function Banner() {
  return (
    <div className="cont-banner">
      <Swiper
        pagination={true}
        slidesPerView={1}
        centeredSlides={true}
        // autoplay={{
        //   pauseOnMouseEnter: true,
        //   delay: 2500,
        //   disableOnInteraction: false
        // }}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cont-img">
            <img src={fotoBanner1} className="img-banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont-img">
            <img src={fotoBanner2} className="img-banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont-img">
            <img src={fotoBanner3} className="img-banner" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner