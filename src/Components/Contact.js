import React, { useState, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Styles/Contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({ 
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [value, setValue] = useState("");
  const form = useRef();

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm('service_q8xunln', 'template_w10dvvw', form.current, '4DkB8oGJKvyMacyNk')
      .then(
        (result) => {
          console.log(result.text);
          console.log ("message sent succesfully")
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUserData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });

    setValue(""); // Reset PhoneInput value
    alert('message sent succesfully');
  };

  return (
    <section className="contactus-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-leftside col-12 col-lg-5">
                <br />
                <h1 className="main-heading fw-bold">
                  # Get In Touch With Us <br />
                </h1>
                <br />
            
                <h1 className="main-heading fw-bold">Address</h1> <br/>
                 <h3>RBK Global Finance Services Ltd</h3>
                 <h5>
                 One Canada Square 37th Floor <br/>
                 Canary Wharf London England 
                 E14 5AB , <br/>
                 Tel   +44 20 3807 8779   
                 </h5>
                 <br/>

                <p className="main-hero-para">
                  Let us know what you are interested in discussing and we will
                  get back to you soon.
                </p>
                <br />
                <br />
              </div>

              <div className="contact-rightside col-12 col-lg-7">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={postUserData}
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={userData.lastName}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-feild">
                      {/* <PhoneInput
                       
                        international
                        defaultCountry="RU"
                        value={value}
                        onChange={(phone) => {
                          setUserData({ ...userData, phone });
                          setValue(phone);
                        }}
                      /> */}
                       <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="+91 1345654545"
                        value={userData.phone}
                        onChange={postUserData}
                      />

                    </div>
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email ID"
                        value={userData.email}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 ">
                      <input
                        type="text"
                        name="message"
                        className="form-control"
                        placeholder="Enter Your Message"
                        value={userData.message}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="form-check form-checkbox-style">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label main-hero-para"
                      htmlFor="flexCheckChecked"
                    >
                      I agree that the thapatechnicalpay may contact me at the
                      email address or phone number above
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-style w-100"
                    onClick={sendEmail}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
