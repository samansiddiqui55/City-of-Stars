"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const tilt = useRef(null);
  const buttonRef = useRef(null);
  const shadow = useRef(null);
  const okay = useRef(null);
  const navigate = useNavigate(); 

  useGSAP(() => {
    gsap.from(".a", {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.from(".b", {
      scale: 0,
      opacity: 0,
      duration: 2,
      stagger: 1,
      rotateX: 60,
    });
  }, [tilt]);

  useEffect(() => {
    gsap.to(shadow.current, {
      textShadow: "0 0 15px white",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []); 

  useEffect(() => {
    gsap.to(okay.current, {
      textShadow: "0 0 15px white",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []); 

 
  const handleButtonClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger:1,
      rotateX: 90,
      ease: "power2.inOut",
      onComplete: () => {
        navigate("/page2"); 
      },
    });
  };

  return (
    <div ref={tilt} className="h-screen w-screen relative">
      <img
        className="h-screen w-screen"
        src="https://i.pinimg.com/736x/b9/9d/ac/b99dacf937f3b2e21f3fb41634f1eb9b.jpg"
        alt="Background"
      />


      <div className="absolute top-[10vw] left-[50vw]">
      <svg
         className=" a w-16 h-16 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      > 
        <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
      </svg>
      </div>

      
      <div className="b absolute top-[15vw] font-[la6] left-[30vw] w-8xl p-7">
        <h2 ref={shadow} className="text-white text-8xl mt-3.5">
          Welcome to
        </h2>
      </div>

      <div className="b absolute top-[25vw] font-[la6] left-[25vw] w-8xl p-7">
        <h2 ref={okay} className="mt-3 text-8xl text-white align-text-top">
          The City of Stars
        </h2>
      </div>

      
      <div className="absolute top-[45vw] left-[45vw]">
        <button
          ref={buttonRef}
          onClick={handleButtonClick}
          className="text-white border-2 px-8 py-2 font-[la4] rounded-2xl hover:bg-purple-950 transition"
        >
          Start the experience
        </button>
      </div>
    </div>
  );
};

export default Page1;
