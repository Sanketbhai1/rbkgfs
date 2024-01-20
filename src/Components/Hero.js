import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Empower, Invest, Thrive.</p>
          <h2 className="text-title">
            Empowering Your Financial Journey Online.
          </h2>
          <p className="text-descritpion">
            Our team of financial analysts employs a strategic methodology to
            pinpoint credit cards that align seamlessly with your requirements.
            Our thorough examination encompasses annual percentage rates and
            annual fees, ensuring a tailored recommendation tailored to your
            financial needs.
          </p>
          {/* Removed Get In Touch Button */}
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Requests</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Consultant</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

