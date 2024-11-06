import React, { useRef, forwardRef, useImperativeHandle } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ResponsiveCarousel = forwardRef((props, ref) => {
  const { food } = props;
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useImperativeHandle(ref, () => ({
    next: () => sliderRef.current.slickNext(),
    prev: () => sliderRef.current.slickPrev(),
  }));

  return (
    <div className="slider-container mb-3 !overflow-x-hidden">
      <Slider ref={sliderRef} {...settings}>
        {food &&
          food.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="border bg-white rounded-lg flex flex-col items-center space-y-2 py-5 h-54 md:m-2 ">
                <img src={item.image} alt={item.name} className="h-24" />

                <div className="w-full flex justify-center">
                  <div className="border w-16 border-red-600 rounded-lg "></div>
                </div>
                <h3 className="font-bebas text-xl text-center font-medium ">
                  {item.title}
                </h3>
                <p className="text-center font-roboto font-normal text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
});

export default ResponsiveCarousel;
