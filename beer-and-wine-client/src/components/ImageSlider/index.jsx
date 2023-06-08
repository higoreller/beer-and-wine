import React from "react";
import Slider from "react-slick";
import { SliderContainer, SliderItem, SliderImage } from "./style";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 5190, // Desktop breakpoint
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 968, // Tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SliderItem key={index}>
            <SliderImage src={image} alt={`slide ${index}`} />
          </SliderItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
