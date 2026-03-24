import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactForm from "./Components/ContactForm/ContactForm";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import "./App.css";

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;