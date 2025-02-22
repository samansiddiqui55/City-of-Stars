import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page7 = () => {
  const imgRef = useRef(null);

  useEffect(() => {
   
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out",
      }
    );


    gsap.to(imgRef.current, {
      scale: 1.05,
      duration: 2,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%", 
        end: "top 40%",
        scrub: 1, 
      },
    });
  }, []);

  return (
    <div className="h-screen w-screen">
      <img
        ref={imgRef}
        className="h-[100%] w-[100%] object-cover"
        src="https://i.pinimg.com/736x/83/43/37/8343371cd0d4daf4db423a58a4c1761d.jpg"
        alt="Background"
      />
    </div>
  );
};

export default Page7;
