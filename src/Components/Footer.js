import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";


function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
          <p className="ft-logo">
          <img src={logo} alt="RBKGFS Logo" className="logo-img" />
             </p>

            <p className="ft-description">
            Unlock financial potential with strategic guidance and secure investments. Our commitment to excellence ensures your journey to prosperity is both informed and empowered.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Features</p>
          <ul className="ft-list-items">
            <li>
              <a href="/info">Solutions</a>
            </li>
            <li>
              <a href="/research">Research</a>
            </li>
            <li>
              <a href="/consulting">Consulting</a>
            </li>
            <li>
              <a href="#services">Blog</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Company</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthplus.com">support@rbkgfs.com</a>
            </li>
            <li>
              <a href="mailto:appointment@healthplus.com">
                info@rbkgfs.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">Tel   +44 20 3807 8779   </a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">Tel  +44 74483 50715</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p> RBK Global Finance Limited ​is a company registered in London England (Registration No.15172310). Registered office: 167-169 Great Portland Street, London England, W1W 5PF. Financing and banking services are provided by authorised payment institution. Finance services for RBK GFS PVT LTD., a company incorporated in England & Wales <br/>
         Registration No : 07131446 
            <br/> 
          © 2024 RBKGFS. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://uk.linkedin.com/company/rbk-payments-limited"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* developer @sanketwalunj all right reserved */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path  fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
