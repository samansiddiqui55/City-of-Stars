import React, { useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import Sound from "../Components/Sound";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const arrowRef = useRef(null);
  const arrowRef2 = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(arrowRef.current, {
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  }, );
  useEffect(() => {
    gsap.to(arrowRef2.current, {
      textShadow: "0 0 15px white",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  }, []);
  const handlenavigation = () => {
    navigate('/page4')
}

  return (
    <div className="relative h-screen w-screen">
    
      <img
        className="h-screen w-screen object-cover"
        src="https://i.pinimg.com/736x/f2/64/5a/f2645a58486019797e66ae5e7b544db6.jpg"
        alt="City of Stars"
      />

    
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <h3  ref ={arrowRef2} className="text-white text-[6vw] font-[la2] tracking-wide">
          CITY OF STARS
        </h3>
      </div>

    
      <div className="absolute top-[78%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-xl text-white text-center">
        <h4 className="mb-1">Dive into</h4>
        <h4 className="text-2xl font-bold">the World of Books</h4>
      </div>

      <div
        ref={arrowRef}
        className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg transition-all hover:scale-110"
      >
        <i onClick={handlenavigation} className="text-black ri-arrow-down-s-line text-2xl"></i>
      </div>
      
    </div>
  );
};

export default Page2;
