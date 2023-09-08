import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./slider.module.css";

export default function Slider({ videos, setTarget }) {
  return (
    <div className={styles.slider}>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          350: {
            slidesPerView: 1,
          },
          430: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          740: {
            slidesPerView: 4,
          },
          920: {
            slidesPerView: 3,
          },
          1050: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        {videos &&
          videos.map((video) => {
            return (
              <SwiperSlide key={video.id}>
                <div className={styles.item} onClick={() => setTarget(video)}>
                  <img
                    src={
                      (video.snippet.thumbnails.maxres &&
                        video.snippet.thumbnails.maxres.url) ||
                      (video.snippet.thumbnails.standard &&
                        video.snippet.thumbnails.standard.url) ||
                      (video.snippet.thumbnails.high &&
                        video.snippet.thumbnails.high.url) ||
                      (video.snippet.thumbnails.default &&
                        video.snippet.thumbnails.default.url)
                    }
                    className={styles.item__img}
                    alt="slide_item"
                  />
                  <div className={styles.title__box}>
                    <h2 className={styles.title}>{video.snippet.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
