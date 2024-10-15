import React from "react";
import "../App.css";
import FormItem from "../components/FormItem";

const Connect = () => {
  return (
    <div className="connect-page">
      <div className="form-container">
        <h1 className="page-heading">{"Let's Connect!"}</h1>
        <form className="form">
          <div className="names-row">
            <FormItem
              type={"text"}
              name={"fname"}
              placeholder={"First Name"}
              id={"first-name"}
            />
            <FormItem
              type={"text"}
              name={"lname"}
              placeholder={"Last Name"}
              id={"last-name"}
            />
          </div>
          <FormItem
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            id={"email"}
          />
          <FormItem type={"phone"} placeholder={"Phone"} id={"phone"} />
          <div className="contact-reason">
            <div id="website-design">
              <label htmlFor="website-design">Website Design</label>
              <input
                type="radio"
                name="contact-reason"
                className="radio-dial"
              />
            </div>
            <div id="schedule-interview">
              <label htmlFor="interview">Schedule Interview</label>
              <input
                type="radio"
                name="contact-reason"
                className="radio-dial"
              />
            </div>
          </div>
          <FormItem
            type={"text"}
            name={"subject"}
            placeholder={"Subject"}
            id={"subject"}
          />
          <div className="form-row">
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
    </div>
  );
};

export default Connect;
