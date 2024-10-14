import React from "react";
const Contacts = () => {
  return (
    <div className="contact-methods">
      <div className="contact-container">
        <a href="" id="github" className="contact-link">
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
