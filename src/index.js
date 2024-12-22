import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Components/App";
import "./Components/App.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Header/>
    <App />
    <Footer/>
  </Router>
);
/*
reportWebVitals();*/
