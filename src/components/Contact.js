import React from "react"

import "./Contact.css"

export default ({id}) => (
  <div id={id} className="contact-wrapper">
    <h1 className="contact-title">Contact</h1>
    <form method="post" action="https://getform.io/f/9daacf01-bdae-4750-8cf9-5d8ecc307f91" className="contact-form">
      <label>
        Name
        <input className="generic-contact" type="text" name="name"/>
      </label>
      <label>
        Email
        <input className="generic-contact" type="email" name="email"/>
      </label>
      <label>
        Subject
        <input className="generic-contact" type="text" name="subject"/>
      </label>
      <label>
        Message
        <textarea className="generic-contact" name="message" rows="5" />
      </label>

      <button className="contact-button" type="submit">Send</button>
    </form>
  </div>
);
