import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { caro1, caro2, caro3 } from "../Images/Images";

export default function Caro() {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        className="z-0"
      >
        <div className="relative w-full h-full after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={caro2}
              className="block w-full h-[50vh] md:h-[70vh] object-cover"
              alt="Slide 1"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={caro1}
              className="block w-full h-[50vh] md:h-[70vh] object-cover"
              alt="Slide 2"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={caro3}
              className="block w-full h-[50vh] md:h-[70vh] object-cover"
              alt="Slide 3"
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}
