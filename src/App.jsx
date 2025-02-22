import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import { setLocalStorage } from "./Utils/Localstorage";
import Sound from "./Components/Sound";

const RedirectOnRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.location.href = "/"; 
    }
  }, []);

  return null;
};

const App = () => {
  useEffect(() => {
    setLocalStorage(); 
  }, []);

  return (
    <Router>
      <RedirectOnRefresh />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
   
      <Page7/>
       <Page3/>
      <div className="absolute top-[5%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Sound />
      </div>
    </Router>
  );
};

export default App;
