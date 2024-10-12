import React from "react";
import "../App.css";

const Connect = () => {
  return (
    <div className="form-container">
      <form>
        <h1 className="page-heading">Let's Connect!</h1>
        <div className="row-form">
          <div className="col">
            <input
              type="name"
              className="form-item"
              id="first-name"
              placeholder="First name"
            ></input>
          </div>
          <div className="col">
            <input
              type="name"
              className="form-item"
              id="last-name"
              placeholder="Last name"
            ></input>
          </div>
        </div>
        <div className="row-form">
          <input
            type="email"
            className="form-item"
            id="email"
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="row-form">
          <input
            type="phone"
            className="form-item"
            id="phone"
            placeholder="Phone"
          ></input>
        </div>
        <div className="row-form">
          <select
            name="select-options"
            className="form-item"
            id="select-options"
          >
            <option value="1">Select an option</option>
            <option value="2">Schedule Interview</option>
            <option value="3">Website Design</option>
          </select>
        </div>
        <div className="row-form">
          <input
            type="subject"
            className="form-item"
            name="subject"
            id="subject"
            placeholder="Subject"
          ></input>
        </div>
        <div className="row-form">
          <textarea
            type="message"
            className="form-item"
            name="message"
            id="message"
            rows="5"
            placeholder="Type message here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" id="btn-contact">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Connect;
