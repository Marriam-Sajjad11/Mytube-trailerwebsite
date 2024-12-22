import React from "react";
import All from "./All/All";
import { Routes, Route } from "react-router-dom";
import Funny from "./Funny/Funny";
import Punjabi from "./Punjabi/Punjabi"
import Horror from "./Horror/Horror"
import Action from "./Action/Action";
import Hollywood from "./Hollywood/Hollywood";
import Lollywood from "./Lollywood/Lollywood";
import Bollywood from "./Bollywood/Bollywood";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/comedy" element={<Funny />} />
        <Route path="/punjabi" element={<Punjabi />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/action" element={<Action />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/lollywood" element={<Lollywood />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/Footer" element={<Footer/>}/>


        
              </Routes>
    </div>
  );
};

export default App;

