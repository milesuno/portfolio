import React, { Component } from "react";

class ContactForm extends Component {
  contactFormClick = () => {
    window.dataLayer.push({
      event: "contact-form_interaction",
      page_title: window.document.title,
      page_URL: window.location.href,
    });
  };

  postMessage = (e) => {
    window.dataLayer.push({
      event: "contact-form_submit",
      page_title: window.document.title,
      page_URL: window.location.href,
    });

    e.preventDefault();
    const form = document.querySelector(".enquiries-form");
    const firstName = document.querySelector(".first");
    const lastName = document.querySelector(".last");
    const email = document.querySelector(".email");
    const subject = document.querySelector(".subject");
    const message = document.querySelector(".message");

    console.log({ firstName, lastName, email, subject, message });

    const mail = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    fetch("https://portfolio-api.glitch.me/contact/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));

    form.reset();
  };

  render() {
    return (
      <div className="enquiries-wrapper" onClick={this.contactFormClick}>
        <form className="enquiries-form" onSubmit={this.postMessage}>
          <div className="enquiries-content">
            <h2>Enquiries:</h2>
            <span className="name-wrapper">
              <input type="text" placeholder="First Name" className="first" />
              <input type="text" placeholder="Last Name" className="last" />
            </span>
            <span className="email-wrapper">
              <input type="text" placeholder="Email" className="email" />
            </span>
            <span className="subject-wrapper">
              <select className="subject">
                <option selected hidden>
                  Select a subject
                </option>
                <option>Design</option>
                <option>Development</option>
                <option>Project Management</option>
                <option>Service Enquiry</option>
                <option>Other</option>
              </select>
            </span>
            <span className="message-wrapper">
              <textarea
                cols="50"
                rows="10"
                type="text"
                className="message"
                placeholder="Enter message"
              />
            </span>
          </div>
          <button className="button margin-5">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
