import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from 'emailjs-com';
// import Swal from 'sweetalert2';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const styles = {
  body: {
    backgroundColor: "#90E0EF",
    paddingTop: '150px',
    paddingBottom: '150px',
  },
  heading: {
    textAlign: "center",
  },
  form: {
    textAlign: "left",
    flex: "display",
    justifyContent: "center",
  },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlank = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (
      inputType === "name" ||
      inputType === "email" ||
      inputType === "message"
    ) {
      if (!inputValue.length) {
        setErrorMessage(`Please fill in the ${inputType} field.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } else if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    } else if (!message) {
      setErrorMessage("Please enter a message.");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
    .then((result) => {
      console.log(result.text);
    });

    alert("Thank you for your message!");

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>Contact Me</h1>
      <form className="row g-3" style={styles.form} ref={form}>
        <div className="form-group col-md-5">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            className="form-control required"
            name="name"
            onChange={handleInputChange}
            onBlur={handleBlank}
            placeholder="First name"
          />
        </div>
        <div className="form-group col-md-5">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            value={email}
            className="form-control required"
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlank}
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group col-md-10">
          <label htmlFor="message">Enter your message here:</label>
          <textarea
            type="text"
            value={message}
            className="form-control required"
            name="message"
            rows="3"
            onChange={handleInputChange}
            onBlur={handleBlank}
          ></textarea>
        </div>
        <div className="form-group text-center">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
