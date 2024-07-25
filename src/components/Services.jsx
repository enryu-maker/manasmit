import React from "react";
import Carousel from "better-react-carousel";
import { IMAGES } from "../Images/Images";

function Services() {
  return (
    <div className="w-full h-full">
      <div>
        <div className="w-full text-center space-y-5">
          <p className="font-semibold text-center">Our Services</p>
          <p className="font-semibold text-center text-4xl">
            What We Can Offer You
          </p>
          <div className="space-y-0">
            <p className="font-base text-center p-4">
              We offer a wide range of services designed to meet your needs and
              exceed your expectations.
            </p>
            <p className="font-base text-center">
              Our diverse offerings include the following...
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 px-8 ">
        <Carousel
          cols={3}
          rows={1}
          gap={50}
          loop
          autoplay={3000}
          className="flex flex-row justify-center align-middle items-center rounded-xl"
        >
          {IMAGES.map((obj, index) => {
            const fileName = obj.img
              .replace("_", " ")
              .replace("_", " ")
              .split("/")
              .pop()
              .split(".")[0];
            return (
              <Carousel.Item key={index}>
                <div
                  className="w-full h-[50vh] flex flex-col justify-center text-white rounded-xl"
                  style={{
                    backgroundImage: `url(${obj.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", // Ensure the background image covers the container
                  }}
                >
                  <div className="w-full h-full rounded-xl bg-bluesomething bg-opacity-70 flex flex-col justify-evenly p-4 md:p-8 py-6 md:py-16 gap-2 items-center">
                    <p className="md:text-4xl text-xl font-base text-center">
                      {fileName}
                    </p>
                    <hr className="bg-black w-full" />
                    <p className="text-md font-light p-2 md:p-4 text-justify md:text-md text-sm">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
