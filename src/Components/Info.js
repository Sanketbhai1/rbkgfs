// Info.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Solutions</span>
        </h3>
        <p className="info-description">
          RBK Financial empowers businesses with an advanced, technology-driven platform for seamless financial operations. Acknowledging the vital role of efficient transactions in business success, our solution is finely tuned to the unique requirements of businesses across all scales. Dedicated to providing secure, efficient, and dependable financial services, RBK Financial integrates cutting-edge technology to simplify financial transactions. Our commitment to compliance ensures a seamless experience, granting businesses the freedom to conduct transactions without constraints.
        </p>
      </div>

      {/* Plain Heading and Paragraph */}
      <div className="plain-content">
        <Link to="/asset-based-lending">
          <h3 className="plain-heading">Asset-Based Lending</h3>
        </Link>
        <br/>
        <p className="plain-paragraph">
          If you own real estate, equipment, inventory, or accounts receivable, we may be able to secure you a loan or some other type of financing against these assets. This is a perfect product for an expansion or acquisition of a business, where it will take a few months for the increased revenue levels to appear.
        </p>
      </div>

      <div className="plain-content">
        <Link to="/business">
          <h3 className="plain-heading">Business Line of Credit</h3>
        </Link>
        <br/>
        <p className="plain-paragraph">
          A business line of credit is a flexible financing solution that allows you to have money waiting in the wings for when you need it most. It’s the perfect product for businesses that have a mismatch between their income and expenses and often sought out by inventory heavy businesses. About 2% of all applicants get approved for a line of credit.
        </p>
      </div>

      <div className="plain-content">
        <Link to="/unvoice">
          <h3 className="plain-heading">Invoice Financing</h3>
        </Link>
        <br/>
        <p className="plain-paragraph">
          This is very similar to a line of credit and ideal for businesses that wait to get paid by their customers or have a disfavorable mismatch between their income and expenses. Although slightly more expensive than a line of credit, a factoring facility for invoice financing is not a loan, so the financing company (usually) takes the risk that your customer doesn’t pay.
        </p>
      </div>

      <div className="plain-content">
        <Link to="/cash">
          <h3 className="plain-heading">Merchant Cash Advance</h3>
        </Link>
        <br/>
        <p className="plain-paragraph">
          The merchant cash advance is a great product for businesses who need bridge financing ahead of their busy season or businesses in need of quick capital to remedy an emergency or act on an opportunity. This is also a good product for rapidly growing businesses with high margins and short cash life cycles. If your business doesn’t fit this description, it might not be a fit for you. Another update is that the repayment is custom-tailored to the business, and there is minimal documentation required to fund (i.e., deals get funded within 24-48 hours of application).
        </p>
        <br/>
      </div>
    </div>
  );
}

export default Info;


