import React from "react";
import "./Contact.css"
function Contact() {
  return (
    <section className="c_form">
      <div className="form_container">
        <h3>Your details here..</h3>
        <form id="contactForm" action="#">
          <label for="f_name" class="place-h">
            First name:
          </label>
          <br />
          <input
            type="text"
            id="f_name"
            placeholder="input your First name"
            required
          />
          <br />

          <label for="l_name" class="place-h">
            Last name:
          </label>
          <br />
          <input type="text" id="l_name" placeholder="input your last name" />
          <br />

          <label for="email" class="place-h">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@gmail.com"
            required
          />
          <br />

          <label for="phone" class="place-h">
            Phone:
          </label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="input your telephone number"
          />
          <br />

          <label for="message" class="place-h">
            Message:
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="input your message here..."
            required
          ></textarea>
          <br />

          <button type="submit-button" class="submit" onClick="myFunction()">
            Submit
          </button>
          <h2>Contact us,</h2>
          <address>
            Tracom Services Limited
            <br />
            Nairobi, Kenya 00208
            <br />
            Phone: <a href="tel:+254705972628">+254705972628</a>
            <br />
            Email:
            <a href="mailto:admin.tracom@gmail.com">admin.tracom@gmail.com</a>
          </address>
          <script defer src="contact.js"></script>
        </form>
      </div>
    </section>
  );
}

export default Contact;
