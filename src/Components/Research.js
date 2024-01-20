import React from "react";
import Doctor from "../Assets/research.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/Research.css";

function Research() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Our Research</span>
        </h3>
        <p className="about-description">
        RBK offers financial institutions impartial and independent guidance. Our seasoned analysts conduct thorough research in the field of financial technology, providing you with valuable tools to navigate the market efficiently.

        Grounded in extensive industry expertise, a broad network of connections, our VendorMatch database, and a steadfast dedication to objectivity and outstanding client service, our research is designed to empower you in making informed decisions.
        </p>

        <h4 className="about-text-title">OUR APPROACH</h4>

        <SolutionStep
          title="EXPERTISE"
          description="
          Explore impartial perspectives on cutting-edge industry solutions and trends. Our analysts, with decades of experience in financial services, distill their insights to deliver decision-makers well-founded conclusions on pivotal technologies."
        />

        <SolutionStep
          title="OBJECTIVITY"
          description="We serve a diverse client base, including financial institutions, vendors, private equity firms, and consulting entities. Our approach to solution assessments is characterized by uniform standards applied to all participants, with judgments unaffected by a firm or vendor's client status."
        />

        <SolutionStep
          title="UNIQUE SOURCE DATA"
          description="
          We nurture an extensive network of industry contacts to gather both qualitative and quantitative information using VendorMatch RFIs, surveys, and interviews. Complementing these efforts, we integrate public data and meticulously cite our sources."
        />
      </div>
    </div>
  );
}

export default Research;
