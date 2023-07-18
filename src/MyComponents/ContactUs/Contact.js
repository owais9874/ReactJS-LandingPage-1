import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact-form">
      <h3>Contact Us</h3>
      <form>
        <input
          className="user-name"
          type="text"
          required="required"
          placeholder="Your Name:"
        />
        <input
          className="user-num"
          type="phone"
          required="required"
          placeholder="Your phone Number:"
        />
        <textarea
          className="txt-message"
          placeholder="Type Your Message..."
        ></textarea>
        <button className="submit-btn" type="submit">
          Send Now
        </button>
      </form>
    </div>
  );
}
