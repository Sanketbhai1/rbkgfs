import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          RBKGFS <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Choosing RBK gfs isn't adopting a new service; it's partnering in your business journey. It's about leveraging our wealth of experience to propel your business forward, unrestricted by boundaries and empowered by seamless, borderless payments. Welcome to RBK Payments – where experience meets innovation, and your business story unfolds with limitless possibilities.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        We prioritize your privacy at rbk gfs. Our Privacy Policy delineates the procedures for collecting, utilizing, and safeguarding your personal and financial information. We adhere to stringent measures for secure data handling, and you can trust that your information is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        When engaging with rbk gfs, your agreement to our Terms of Service is imperative. These terms encompass guidelines for utilizing our platform, interacting with financial consultants, and defining the responsibilities of both parties involved. A clear understanding of these terms is essential to guarantee a seamless experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Our platform facilitates connections with experienced financial consultants who offer online consultations. While these consultations do not substitute in-person financial meetings, they offer a convenient alternative for financial advice, planning, and guidance. Providing precise and comprehensive financial information is essential to receive optimal assistance and tailored solutions.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          


      rbk gfs is designed to simplify access to financial services. Clients can choose from a range of financial specialists, schedule consultations, and engage in virtual meetings. Our team of experts provides personalized financial advice and tailored plans to meet your specific needs. It's crucial to note that urgent financial matters should be directed to your local financial institution.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 RBKGFS. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
