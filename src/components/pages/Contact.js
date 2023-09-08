import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {

  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [message, setMessage] =useState('');

  function sendEmail(e) {
    e.preventDefault();

    

    emailjs
      .sendForm(
        "service_p73vdri",
        "template_fh1orlj",
        e.target,
        "39WpQ32ztYeKk4WVE"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
        alert("Message Sent");
      })
      .catch((err) => {
        console.log(err);
        alert("Message failed to send");
      });
    
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-blue-purple-simple-gradient-background-image_760572.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Us</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          name="user_email"
          className="form-control"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          placeholder=""
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};
export default Contact;
