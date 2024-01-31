import React from "react";
import Doctor from "../Assets/tradefinance.png";
import SolutionStep from "./SolutionStep";
import "../Styles/Tradefinance.css";

function Tradefinance() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Trade Finance</span>
        </h3>
        <p className="about-description">
        Fuel your growth with a Adaptable Financing Solutions.
        </p>

        <h4 className="about-text-title">Adaptable Financing</h4> 
        <p className="about-description">
        Drive the growth of your business using our versatile lending solutions tailored to fund your international trade
        ventures. Ignite your expansion and confidently navigate the complexities of global markets.
        </p>

        <SolutionStep
          title="Pay as use it"
          description="Experience the freedom of our facility with no upfront or concealed fees, enabling you to utilize it whenever
          necessary without incurring any unnecessary charges."
        />

        <SolutionStep
          title="Increase Liquidity"
          description="Repay at your convenience, with the flexibility to settle up to 120 days later, providing you with ample time to
          market and sell your goods and services."
        />

        <SolutionStep
          title="No collateral"
          description="No need for collateral, ensuring that it won't have any impact on your existing credit lines."
        />
      </div>
    </div>
  );
}

export default Tradefinance;
