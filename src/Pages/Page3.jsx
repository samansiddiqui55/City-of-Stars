import React, { useEffect, useRef } from "react";
import Video from "../assets/Video.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const truth = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      truth.current,
      { opacity: 0, scale: 1 },
      {
        textShadow: "0 0 15px red",
        scale: 2,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: truth.current,
          start: "top 80%", 
          end: "top 50%", 
          scrub: 1, 
        },
      }
    );
  }, []);

  return (
    <>
      <div className="relative">
        <div className="h-[100vh] w-[100%] absolute">
          <video
            className="h-[100%] w-[100%] object-cover overflow-hidden"
            src={Video}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-[50vw]">
          <h1 ref={truth} className="absolute top-[18vw] text-3xl text-white font-[la7]">
            Here's to the fools who Dream
          </h1>
        </div>
      </div>
    </>
  );
};

export default Page3;
