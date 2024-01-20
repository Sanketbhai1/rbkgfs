// Businessline
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Info.css"; // You can create a new CSS file for specific styling if needed

function Business() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Business Line of Credit</span>
        </h3>
        <p className="info-description">
        A business line of credit is by far the best type of financing a business could have. We like to refer to it as an “emergency” or “opportunity” fund, because if you ever have an emergency or opportunity, the money is there when you need it. Access to a line of credit comes at absolutely no cost, and there is no penalty for not using it.

       The way it works is simple: each “draw” on the line of credit is like a mini-loan. You pay interest only on the amount of money you take, for the length of time withdrawn. For example, if you have a credit line of $100,000 at 18% per year, and never use it, no problem. If you happen to draw $1,000, and pay it back after a month, your total payback would be about $1,140.

       Lines of credit are typically backed by business or personal assets, and upon building a track record of repayment, lenders will often increase your credit limit.
        </p>
        <br />
        <br />
      </div>

      {/* Plain Heading and Paragraph for Asset-Based Lending */}
      
    </div>
  );
}

export default Business;
