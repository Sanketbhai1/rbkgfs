import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "../Components/SolutionStep";
import "../Styles/Consulting.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Consulting() {
  return (
    
    
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Consulting</span>
        </h3>
        <p className="about-description">
        Expert guidance for financial institutions in defining their strategies and maximizing market impact.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="FOR FINANCIAL INSTITUTIONS"
          description="Drawing on our extensive existing research knowledge base and relevant project experience, we are ideally placed to support Financial Institutions throughout technology solution evaluation and selection processes. 1)vendor selection . 2)innovation Assessment . 3)bespoke Research. 4)technology strategy revier."
        />

        <SolutionStep
          title="FOR SOLUTION PROVIDERS"
          description="Celent is ideally placed to assist technology solution providers and IT Services firms with a range of bespoke consulting engagements. We have deep and broad knowledge of buyer need to validate your strategies and can jump-start every project by leveraging our extensive research database. "
        />

        {/* <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        /> */}
      </div>
    </div>
   
  );
}

export default Consulting;