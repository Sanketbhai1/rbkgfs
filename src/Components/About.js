import React from "react";
import Doctor from "../Assets/aboutus.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        At RBK Financial Solutions, our vision is to revolutionize global financial transactions through cutting-edge, technology-based payment solutions. With a dedicated leadership team boasting over 20 years of expertise in global trading, we are committed to leveraging our extensive experience to empower businesses worldwide. Our focus is on providing seamless, borderless, and limitless financial solutions, ensuring that businesses can thrive in the dynamic global marketplace.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect financial specialist and book with ease at Finance Plus. Expert financial advisors prioritize your financial well-being, offering tailored guidance and solutions."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of financial professionals ensure your financial well-being with personalized guidance and solutions."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced financial advisors and specialists are here to provide expert advice and personalized financial plans, helping you achieve your best possible financial well-being."
        />
      </div>
    </div>
  );
}

export default About;
