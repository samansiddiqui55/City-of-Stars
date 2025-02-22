import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { getLocalStorage } from "../Utils/Localstorage";

const Page5 = () => {
  const navigate = useNavigate();
  const fault = useRef(null);
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    gsap.to(fault.current, {
      textShadow: "0 0 15px white",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  }, []);

  useEffect(() => {
    const books = getLocalStorage();
    const book = books.find((b) => b.title === "The Fault in Our Stars");

    if (book && book.quotes.length > 0) {
      setQuotes(book.quotes);
    }
  }, []);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex + 1 < quotes.length ? prevIndex + 1 : 0
    );
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : quotes.length - 1
    );
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div>
        <img
          className="h-[100%] w-[100%] object-cover"
          src="https://i.pinimg.com/736x/71/3c/69/713c69b5bb89d5cb5b2bcf18804e53eb.jpg"
          alt="Background"
        />
      </div>

      {/* Title */}
      <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <h3 ref={fault} className="text-white text-7xl font-[la8]">
          The <span className="text-blue-300">Fault</span> in our{" "}
          <span className="text-blue-300">stars</span>
        </h3>
      </div>

 
      <div className="absolute top-[70%] left-[25%] bg-transparent h-60 w-3xl overflow-hidden rounded-2xl">
        <img
          className="h-full w-full object-cover opacity-40"
          src="https://i.pinimg.com/474x/7d/5b/fb/7d5bfb3612ddc75aadfc5edd316fd3a4.jpg"
          alt="Quote Background"
        />
      </div>

      {/* Quotes Display */}
      <div className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        {quotes.length > 0 ? (
          <h3 className="text-white font-[la4] text-xl hover:text-4xl transition-all duration-300">
            {quotes[currentQuoteIndex].text}
          </h3>
        ) : (
          <h3 className="text-white font-[la4] text-xl">Loading quotes...</h3>
        )}
      </div>

      {/* Quote Navigation Arrows */}
      <div className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <i
          className="text-2xl text-white ri-arrow-left-s-line cursor-pointer hover:text-blue-300 transition-all duration-300"
          onClick={prevQuote}
        ></i>
        <i
          className="text-2xl text-white ri-arrow-right-s-line cursor-pointer ml-4 hover:text-blue-300 transition-all duration-300"
          onClick={nextQuote}
        ></i>
      </div>

      
      <div className="absolute top-[5%] left-[5%]">
        <button
          onClick={() => navigate("/page4")}
          className="bg-white text-black px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-300 hover:text-white transition-all duration-300"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default Page5;
