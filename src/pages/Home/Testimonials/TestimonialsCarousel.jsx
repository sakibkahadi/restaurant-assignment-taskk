import React, { useRef, forwardRef, useImperativeHandle } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import video from "../../../assets/review/Video.png";
import vector from "../../../assets/review/Group.png";
import symbol from "../../../assets/review/“.png";
import people from "../../../assets/review/people.png";
const review = [
  {
    id: 1,
    image: "ll",
    title: "dd",
    description: "s",
  },
  {
    id: 2,
    image: "ll",
    title: "sggggg",
    description: "s",
  },
  {
    id: 3,
    image: "ll",
    title: "aaaaaaaaa",
    description: "s",
  },
  {
    id: 4,
    image: "ll",
    title: "xxxxxxxxxxxxx",
    description: "s",
  },
  {
    id: 5,
    image: "ll",
    title: "ddddddddddddddd",
    description: "s",
  },
];
const TestimonialsCarousel = forwardRef((props, ref) => {
  const testimonialRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useImperativeHandle(ref, () => ({
    next: () => testimonialRef.current.slickNext(),
    prev: () => testimonialRef.current.slickPrev(),
  }));

  return (
    <div className="slider-container mb-3 !overflow-x-hidden">
      <Slider ref={testimonialRef} {...settings}>
        {review &&
          review.map((item) => (
            <div
              key={item.id}
              className="flex flex-col- justify-center border "
            >
              <div className="flex flex-col-reverse lg:flex-row">
                {/* review  section*/}
                <div className="bg-[#febf00] lg:w-2/5   relative ">
                  {/* vector */}
                  <img
                    src={vector}
                    className="absolute h-16  -bottom-[12px] md:bottom-5 lg:bottom-14 -left-0"
                    alt=""
                  />
                  <div className="lg:p-16 md:p-12 p-8  h-full ">
                    {/* review */}
                    <div className="   h-full">
                      {/* description */}
                      <div className="relative  p-2">
                        <img
                          src={symbol}
                          className="absolute -left-1 top-1 size-2 text-black font-bold"
                          alt="symbol"
                        />
                        <p className="font-roboto text-sm">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommended it.
                        </p>
                      </div>
                      {/* customer details */}
                      <div className="md:pt-32 ">
                        <div className="lg:pl-2 flex-1 ">
                          <div className=" flex justify-between">
                            {/* details */}
                            <div className="flex flex-col ">
                              <h1 className=" font-bebas text-lg">
                                KHALID AL DAWSRY
                              </h1>
                              <p className="text-[#333333] font-roboto text-sm">
                                Jeddah, Saudi
                              </p>
                            </div>
                            <div className=" w-fit">
                              <img src={people} alt="reviewer" />
                              <div className="border-b-4 border-red-700 pt-2">
                                {" "}
                              </div>
                            </div>
                          </div>
                          <div className="border-b-[1.5px] border-red-700 -mt-[1px] ">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* video  section*/}
                <img className="lg:w-3/5" src={video} alt="video" />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
});

export default TestimonialsCarousel;
