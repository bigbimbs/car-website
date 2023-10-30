"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const ImageSlideshow = ({ images }: { images: string[] }) => {
  return (
    <Swiper modules={[Navigation]} navigation={true}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlideshow;
