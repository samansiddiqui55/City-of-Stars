import React, { useEffect, useRef } from 'react';
import CityOfStars from '/CityOfStars.mp3';
import gsap from 'gsap';

const Sound = () => {
    const til = useRef(null)
    useEffect(()=>{
        gsap.to(til.current,{
 boxShadow: "0 0 15px white",
        })
    })

  function playSound() {
    const audio = new Audio(CityOfStars);
    audio.play();
  }

  return (
    <div  ref = {til}className='APP  '>
      <button onClick={playSound} className="px-4 py-2  text-black rounded-lg text-xl font-[la2] bg-white">
     sound
     <i   className=" mb-2.5 text-black text-xl ri-volume-up-line"></i>
      </button> 
     

       
    </div>
  );
};

export default Sound;
