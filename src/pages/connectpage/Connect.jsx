import "../connectpage/Connect.css";
import React, { useState } from "react";
import FormItem from "../../components/connectForm/FormItem";

const Connect = () => {
  const [contactReason, setContactReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const [emailError, setEmailError] = useState("");

  const validate = (fname, lname, email, subject, message) => {
    let isValid = true;
    const newInvalidFields = [];
    setError("");
    setEmailError("");

    if (!fname || fname.length < 2) {
      isValid = false;
      newInvalidFields.push("fname");
    }

    if (!lname || lname.length < 2) {
      isValid = false;
      newInvalidFields.push("lname");
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      setEmailError(
        "Invalid email address. Please ensure that you include a valid email."
      );
    }

    if (!contactReason) {
      isValid = false;
      newInvalidFields.push("contactReason");
    }

    if (!subject || subject.length < 2) {
      isValid = false;
      newInvalidFields.push("subject");
    }

    if (!message || message.length < 2) {
      isValid = false;
      newInvalidFields.push("message");
    }

    setInvalidFields(newInvalidFields);
    setError(
      newInvalidFields.length > 0
        ? "Must enter valid input. (At least 2 characters for each input)"
        : ""
    );

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const isValid = validate(fname, lname, email, subject, message);

    if (isValid) {
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
        setSuccess("Message sent successfully!");
        setFormSubmitted(true);
        setError("");
        setInvalidFields([]);
        form.reset();
      } catch (err) {
        setError("Error, please try again later.", err);
      }
    }
  };

  const getInputClass = (fieldName) =>
    invalidFields.includes(fieldName) ? "input-error" : "";

  return (
    <div className="connect-page">
      {formSubmitted ? (
        <h1 className="success-message">{success}</h1>
      ) : (
        <div className="form-container">
          <h1 className="page-heading">{"Let's Connect!"}</h1>
          {error && <p className="error-message">{error}</p>}
          <form className="form" onSubmit={handleSubmit}>
            <div className="names-row">
              <FormItem
                type={"text"}
                name={"fname"}
                placeholder={"First Name"}
                id={"first-name"}
                className={`form-item ${getInputClass("fname")}`}
              />
              <FormItem
                type={"text"}
                name={"lname"}
                placeholder={"Last Name"}
                id={"last-name"}
                className={`form-item ${getInputClass("lname")}`}
              />
            </div>
            {emailError && <p className="error-message">{emailError}</p>}
            <FormItem
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              className={`form-item ${getInputClass("email")}`}
            />
            <FormItem
              type={"phone"}
              placeholder={"Phone"}
              id={"phone"}
              name={"phone"}
              className={"form-item"}
            />
            <div className={`contact-reason ${getInputClass("contactReason")}`}>
              <div id="website-design">
                <label htmlFor="website-design">Website Design</label>
                <input
                  type="radio"
                  name="contactReason"
                  className={`radio-dial ${getInputClass("contactReason")}`}
                  value={"website design"}
                  onChange={(e) => setContactReason(e.target.value)}
                />
              </div>
              <div id="schedule-interview">
                <label htmlFor="interview">Schedule Interview</label>
                <input
                  type="radio"
                  name="contactReason"
                  className={`radio-dial ${getInputClass("contactReason")}`}
                  value={"schedule interview"}
                  onChange={(e) => setContactReason(e.target.value)}
                />
              </div>
            </div>
            <FormItem
              type={"text"}
              name={"subject"}
              placeholder={"Subject"}
              className={`form-item ${getInputClass("subject")}`}
            />
            <div className="form-row">
              <textarea
                type="message"
                className={`form-item ${getInputClass("message")}`}
                name="message"
                rows="5"
                placeholder="Type message here"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" id="btn-contact">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Connect;
