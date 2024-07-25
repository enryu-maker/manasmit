import React, { useState, useRef, useEffect, useMemo } from "react";
import bg from "../Images/bg.png";

function Count() {
  const CountUpAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
  }) => {
    const [count, setCount] = useState(initialValue);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    const options = useMemo(
      () => ({
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }),
      []
    );

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      const currentRef = countRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [options]);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const framesPerSecond = 60;
        const totalFrames = (duration / 1000) * framesPerSecond;
        const incrementValue = (targetValue - initialValue) / totalFrames;

        let currentCount = initialValue;
        const animationInterval = setInterval(() => {
          currentCount += incrementValue;
          setCount(Math.round(currentCount));

          if (incrementValue > 0 && currentCount >= targetValue) {
            setCount(targetValue);
            clearInterval(animationInterval);
          } else if (incrementValue < 0 && currentCount <= targetValue) {
            setCount(targetValue);
            clearInterval(animationInterval);
          }
        }, 1000 / framesPerSecond);

        return () => clearInterval(animationInterval);
      }
    }, [isVisible, initialValue, targetValue]);

    return (
      <div className="flex flex-row items-center" ref={countRef}>
        <div className="icon">{iconComponent}</div>
        <span className="text-4xl font-bold">{count}</span>
        <span className="text-lg">{text}</span>
      </div>
    );
  };

  return (
    <div className="h-auto md:w-2/3 md:max-w-fit w-full md:rounded-xl md:shadow-xl bg-white flex justify-center mt-10">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "10",
        }}
        className="w-full flex md:w-fit flex-col md:rounded-xl md:flex-row px-4 md:px-20 py-16 gap-10 md:gap-40 justify-evenly border-bluesomething border-y-4"
      >
        <div className="flex flex-col items-center text-center text-5xl">
          <h1 className="text-deep-orange-600">
            <CountUpAnimation initialValue={0} targetValue={112} text="+" />
          </h1>

          <h1 className="text-xl text-black w-full text-center">
            Trained Professionals
          </h1>
        </div>
        <div className="flex flex-col items-center text-5xl">
          <h1 className="text-deep-orange-600">
            <CountUpAnimation initialValue={0} targetValue={10} text="+" />
          </h1>
          <h1 className="text-xl text-black w-full text-center">Awards</h1>
        </div>
        <div className="flex flex-col items-center text-5xl">
          <h1 className="text-deep-orange-600">
            <CountUpAnimation initialValue={0} targetValue={1000} text="+" />
          </h1>
          <h1 className="text-xl text-black w-full text-center">
            Happy Clients
          </h1>
        </div>
        {/* <div className="flex flex-col items-center text-5xl">
          <h1 className="text-deep-orange-600">
            <CountUpAnimation initialValue={0} targetValue={100} text="+" />
          </h1>
          <h1 className="text-xl text-black w-full text-center">
            Daily Delivery
          </h1>
        </div> */}
      </div>
    </div>
  );
}

export default Count;
