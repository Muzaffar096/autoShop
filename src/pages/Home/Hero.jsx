import Container from "../../components/Container";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slayd1 from "../../../public/images/slayd-3.png";
import Slayd2 from "../../../public/images/slayd-4.png";
import Slayd3 from "../../../public/images/slayd-5.png";
import Slayd4 from "../../../public/images/slayd-onix.png";
import Slayd5 from "../../../public/images/slayd-tracker.png";
import Button from "/src/components/Button";

const Hero = () => {
  return (
    <Container classes={`mt-3 mb-10`}>
      <h2 className=" text-center my-10 font-semibold text-5xl font-mono uppercase text-zinc-800">So'nggi yangiliklar</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slayd1} alt="Slayd" width={510}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slayd2} alt="Slayd" width={510}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slayd3} alt="Slayd" width={510}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slayd4} alt="Slayd" width={510}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slayd5} alt="Slayd" width={510}/>
        </SwiperSlide>
        
      </Swiper>
    </Container>
  );
};

export default Hero;
