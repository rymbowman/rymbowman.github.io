import "../App.css";
import React, { useState } from "react";
import FormItem from "../components/FormItem";

const Connect = () => {
  const [contactReason, setContactReason] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          phone,
          contactReason,
          subject,
          message,
        }),
      });
      const data = await response.json();
    } catch (err) {}
  };
  return (
    <div className="connect-page">
      <div className="form-container">
        <h1 className="page-heading">{"Let's Connect!"}</h1>
        <form className="form" onSubmit={handleSubmit}>
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
          <FormItem
            type={"phone"}
            placeholder={"Phone"}
            id={"phone"}
            name={"phone"}
          />
          <div className="contact-reason">
            <div id="website-design">
              <label htmlFor="website-design">Website Design</label>
              <input
                type="radio"
                name="contactReason"
                className="radio-dial"
                value={"website design"}
                onChange={(e) => setContactReason(e.target.value)}
              />
            </div>
            <div id="schedule-interview">
              <label htmlFor="interview">Schedule Interview</label>
              <input
                type="radio"
                name="contactReason"
                className="radio-dial"
                value={"schedule interview"}
                onChange={(e) => setContactReason(e.target.value)}
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
