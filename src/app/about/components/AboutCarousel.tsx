"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const AboutCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      interval={5000}
      stopOnHover={false}
      showStatus={false}
      showIndicators={false}
    >
      <div>
        <img className="h-2/3 max-h-96 object-cover" src="/images/cover1.jpg" />
      </div>
      <div>
        <img className="h-2/3 max-h-96 object-cover" src="/images/cover2.jpg" />
      </div>
      <div>
        <img className="h-2/3 max-h-96 object-cover" src="/images/cover3.jpg" />
      </div>
    </Carousel>
  );
};

export default AboutCarousel;
