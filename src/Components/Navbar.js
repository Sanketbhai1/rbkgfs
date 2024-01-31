import React, { useState, } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";


function Navbar() {
  const [showSubLinks, setShowSubLinks] = useState(false);
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={logo} alt="RBKGFS Logo" className="logo-img" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        {/* <li 
            className="services-tab"
            onMouseEnter={() => setShowSubLinks(true)}
            onMouseLeave={()=> setShowSubLinks(false)}    
             >
            <Link to="/info" className="navbar-links">
              Services
            </Link>
            {setShowSubLinks && (
              <div className="sub-link-box">
                <ul className="sub-tabs">
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  
                </ul>
              </div>
            )}
          </li> */}

   <div class="btn-group">
      <Link to="/info">
        <button type="button" class="btn btn-lg">Solutions</button>
      </Link>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu" style={{ backgroundColor: 'dimwhite' }}>
       
        <a class="dropdown-item" href="/asset-based-lending"> Asset-Based-Lending</a>
       
        <a class="dropdown-item" href="/business">Business line of credit</a>
        <a class="dropdown-item" href="/unvoice">Invoice Financing</a>
        <a class="dropdown-item" href="/cash">Merchant Cash Advance</a>
        <a class="dropdown-item" href="/overseas">Overseas Financing</a>
        <a class="dropdown-item" href="/T">Tradefinance</a>

        {/* <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a> */}
      </div>
    </div>

        <li>
          <a href="/about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="/consulting" className="navbar-links">
            Consulting
          </a>
        </li>
        {/* <li>
          <a href="/reviews" className="navbar-links">
            Reviews
          </a>
        </li> */}
        <li>
          <a href="/research" className="navbar-links">
            Research
          </a>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>

          <li 
            className="services-tab"
            onMouseEnter={() => setShowSubLinks(true)}
            onMouseLeave={()=> setShowSubLinks(false)}    
             >
            <Link to="/info" className="navbar-links">
              Services
            </Link>
            {setShowSubLinks && (
              <div className="sub-limk-box">
                <ul className="sub-tabs">
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  <li>
                    <Link to="/assets-learning" className="sub-tab-link">
                      Assets Based Lending
                    </Link>
                  </li>
                  
                </ul>
              </div>
            )}
          </li>
          <li>
            <a onClick={openNav} href="/about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/consulting">
              Consulting
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/research">
              Research
            </a>
          </li>
        </ul>
      </div>

      {/* Get in Touch Button */}
      <Link to="/contact" className="get-in-touch-btn">
      <FontAwesomeIcon icon={faEnvelope} /> Get in Touch
    </Link>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
    
  );
}

export default Navbar; 
