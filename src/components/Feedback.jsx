import React from "react";
import { p1, p2, p3 } from "../Images/Images";
import map from "../Images/map.jpg";
function Feedback() {
  return (
    <div className="w-full h-full realtive ">
      <div className="w-full h-full p-8 flex flex-col gap-20 justify-between">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-md font-semibold">Our Clients</p>
          <p className="py-4  text-4xl font-semibold">What Our Clients Say</p>
          <p className="w-1/2 pb-4 md:block hidden">
            Our clients' satisfaction is our top priority, and their feedback
            speaks volumes about the quality of our services. Here are some
            heartfelt testimonials from our valued clients
          </p>
        </div>
        <div className="flex flex-wrap w-full h-full justify-center gap-10">
          <div className="relative">
            <div className="w-[50vh] h-[30vh] rounded-lg bg-bluesomething p-4 text-center text-white text-md font-medium z-20 relative">
              <p>
                I recently had the pleasure of experiencing a facial treatment
                at Manasmit, and I must say it was a truly delightful
                experience. From the moment I walked in, I was greeted with a
                warm welcome and a relaxing ambiance that instantly made me feel
                at ease.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-10 h-10 bg-bluesomething flex m-auto rotate-45 -mt-5 absolute z-10"></div>
            </div>
            <div className="flex justify-center pt-4 relative z-30">
              <img src={p2} className="w-16 h-16 m-4 rounded-full" />
            </div>
          </div>
          <div className="">
            <div className="w-[50vh] h-[30vh] rounded-lg bg-bluesomething p-4 text-center text-white text-md font-medium z-20 relative">
              The facial treatment itself was incredibly rejuvenating. The
              products used were of the highest quality, leaving my skin feeling
              refreshed, hydrated, and glowing. I appreciated the gentle
              techniques employed by the esthetician, ensuring a soothing
              experience.
            </div>
            <div className="flex justify-center w-full">
              <div className="w-10 h-10 bg-bluesomething flex m-auto rotate-45 -mt-5 absolute z-10"></div>
            </div>{" "}
            <div className="flex justify-center pt-4 relative z-30">
              <img src={p1} className="w-16 h-16 m-4 rounded-full" />
            </div>
          </div>
          <div className="">
            <div className="w-[50vh] md:h-[30vh] h-fit  rounded-lg bg-bluesomething p-4 text-center text-white text-md font-medium z-20 relative">
              The staff at Manasmit are highly professional and attentive. They
              took the time to understand my skin concerns and customized the
              treatment to address my specific needs. The level of care and
              attention to detail was exceptional, and I felt confident in their
              expertise throughout the entire process.
            </div>
            <div className="flex justify-center w-full">
              <div className="w-10 h-10 bg-bluesomething flex m-auto rotate-45 -mt-5 absolute z-10"></div>
            </div>{" "}
            <div className="flex justify-center pt-4 relative z-30">
              <img src={p3} className="w-16 h-16 m-4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
