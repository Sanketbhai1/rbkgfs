import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Consulting from "./Pages/Consulting";
import Info from "./Components/Info"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AssetBasedLending from "./Components/AssetBasedLending";
import Business from "./Components/Business";
import Unvoice from "./Components/Unvoice";
import Cash from "./Components/Cash";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Research from "./Components/Research";
import Reviews from "./Components/Reviews";
import FAQ from "./Components/Faq";
import Overseas from "./Components/Overseas";
import Tradefinance from "./Components/Tradefinance";


function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/info" element={<Info/>} />  
          <Route path="/asset-based-lending" element={<AssetBasedLending />} />
          <Route path="/business" element={<Business />} />
          <Route path="/unvoice" element={<Unvoice />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/overseas" element={<Overseas />} />
          <Route path="/T" element={<Tradefinance />} />
          

          <Route path="/consulting" element={<Consulting/>} />
          <Route path="/research" element={<Research />} />
          
          <Route path="/contact" element={<Contact />} /> 
          {/* <Route path="/reviews" element={<Reviews />} />  */}


          <Route path="/legal" element={<Legal />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
