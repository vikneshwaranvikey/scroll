import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <>
      <section id="home">
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
            spaceBetween={50}
            effect="flip"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img className="imageR" src="Assets/1.jpg" alt=""></img>
              <div className="contentee">
                <h1>Welcome To My site</h1>
                <p>React Router-Dom</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="imageR" src="Assets/2.jpg" alt=""></img>
              <div className="contentee">
                <h1>Welcome To HomePage</h1>
                <p>React Router-Navbar</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="imageR" src="Assets/3.jpg" alt=""></img>
              <div className="contentee">
                <h1>Welcome To HomePage</h1>
                <p>React Router-NavLing</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="imageR" src="Assets/4.jpg" alt=""></img>
              <div className="contentee">
                <h1>Welcome To HomePage</h1>
                <p>React Router-Navigation</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Home;
