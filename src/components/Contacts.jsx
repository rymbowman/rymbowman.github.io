import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="contact-methods" data-aos="fade-in">
      <div className="contact-container">
        <a
          href="https://github.com/rymbowman"
          id="github"
          className="contact-link"
        >
          <i className={"bx bxl-github contact-img"}></i>
          <p className="contact-tooltip">Github</p>
        </a>
      </div>
      <div className="contact-container">
        <a href="" id="LinkedIn" className="contact-link">
          <i className={"bx bxl-linkedin-square contact-img"}></i>
          <p className="contact-tooltip">LinkedIn</p>
        </a>
      </div>
      <div className="contact-container">
        <a href="" id="email" className="contact-link">
          <i className={"bx bx-envelope contact-img"}></i>
          <p className="contact-tooltip">Email</p>
        </a>
      </div>
      <div className="contact-container">
        <a href="" id="facebook" className="contact-link">
          <i className={"bx bxl-facebook-square contact-img"}></i>
          <p className="contact-tooltip">Facebook</p>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
