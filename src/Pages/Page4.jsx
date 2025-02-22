"use client"
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Page4 = () => {
  const textRef = useRef(null);
  const arrow = useRef(null);
  const [book, setBook] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    gsap.to(textRef.current, {
      textShadow: "0 0 15px white",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  });

  useEffect(() => {
    gsap.to(arrow.current, {
      boxShadow: "0 0 15px white",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  });

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (book.toLowerCase() === "the fault in our stars") {
      navigate("/page5"); 
    } else if (book.toLowerCase() === "a walk to remember") {
      navigate("/page6"); 
    } else {
      alert("Book not found! Please enter a valid book name.");
    }

    setBook(""); 
  };

  return (
    <div className="relative h-screen w-screen">
      <img
        className="h-full w-full object-cover"
        src="https://i.pinimg.com/736x/04/6d/e5/046de5d8d3ebc132574516714f848b54.jpg"
        alt="Background"
      />

      <div className="absolute top-[40%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer">
        <h3
          ref={textRef}
          className="text-4xl text-blue-900 font-bold hover:scale-105 font-[la2]"
        >
          Enter your labyrinth
        </h3>

        <form onSubmit={handleLogin}>
          <input
            value={book}
            onChange={(e) => setBook(e.target.value)}
            type="text"
            name="book"
            placeholder="Enter your book name"
            required
            className="w-full h-10 px-4 py-2 mt-5 text-white rounded-lg border-2 border-black focus:outline-none focus:border-purple-950 bg-transparent placeholder:text-white hover:scale-110"
          />
        </form>
      </div>

      <div className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-xl text-white font-bold font-[la4]">
          Explore the untapped
        </h3>
        <h3 className="text-4xl mb-1 text-white font-[la4]">
          Power of Words
        </h3>
      </div>

      <div
        ref={arrow}
        className="rounded-full bg-white absolute top-[96%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-2 py-1"
      >
        <i className="text-black ri-arrow-down-s-line text-xl"></i>
      </div>
    </div>
  );
};

export default Page4;
