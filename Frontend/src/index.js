import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ScrollToUp from './components/ScrollToUp.js';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <ScrollToUp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Projects />} />
          <Route path="/About" element={<About />} />
        </Routes>  
    </Router>
  </React.StrictMode>
);
 //navbar after router  //footer before router
  //<Route path="*" element={<Error />} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
