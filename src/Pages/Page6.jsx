import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { getLocalStorage } from "../Utils/Localstorage";

const Page6 = () => {
  const navigate = useNavigate();
  const fault = useRef(null);
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    gsap.to(fault.current, {
      textShadow: "0 0 15px black",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  }, []);

  useEffect(() => {
    const books = getLocalStorage();
    const book = books.find((b) => b.title === "A Walk to Remember");

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
    <div className="relative h-screen w-screen">
    
      <div>
        <img
          className="h-[100%] w-[100%] object-cover"
          src="https://i.pinimg.com/736x/16/bf/b7/16bfb77461f77310f3519fb2f50edc9c.jpg"
          alt="Background"
        />
      </div>

     
      <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <h3 ref={fault} className="text-yellow-500 text-5xl font-[la1]">
          A Walk to Remember
        </h3>
      </div>

    
      <div className="absolute top-[70%] left-[25%] bg-transparent h-60 w-3xl overflow-hidden rounded-2xl">
        <img
          className="h-full w-full object-cover opacity-50"
          src="https://i.pinimg.com/736x/40/cb/f9/40cbf92cd442c8fd89db65ec12385244.jpg"
          alt="Quote Background"
        />
      </div>

    
      <div className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        {quotes.length > 0 ? (
          <h3 className="text-white font-[la4] text-xl hover:text-4xl transition-all duration-300">
            {quotes[currentQuoteIndex].text}
          </h3>
        ) : (
          <h3 className="text-white font-[la4] text-xl">Loading quotes...</h3>
        )}
      </div>

     
      <div className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <i
          className="text-2xl text-white ri-arrow-left-s-line cursor-pointer hover:text-yellow-500 transition-all duration-300"
          onClick={prevQuote}
        ></i>
        <i
          className="text-2xl text-white ri-arrow-right-s-line cursor-pointer ml-4 hover:text-yellow-500 transition-all duration-300"
          onClick={nextQuote}
        ></i>
      </div>

     
      <div className="absolute top-[5%] left-[5%]">
        <button
          onClick={() => navigate("/page4")}
          className="bg-white text-black px-4 py-2 rounded-lg font-bold shadow-md hover:bg-yellow-500 hover:text-white transition-all duration-300"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default Page6;
