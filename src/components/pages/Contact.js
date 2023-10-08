import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <section>
    <Container>
      
    <div
      className="container border"
      style={{
        marginTop: "10px",
        width: "100%",
        height: '85vh',
        backgroundImage: `url('https://images.hdqwalls.com/download/purple-galaxy-abstract-4k-oz-2560x1700.jpg')`,
        backgroundPosition: "center",
        
      }}
    >
      <h1 style={{ marginTop: "15px",color: "white" }}>Contact Us</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label style={{color: "white"}}>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label style={{color: "white"}}>Email</label>
        <input
          type="text"
          name="user_email"
          className="form-control"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={{color: "white"}}>Message</label>
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
          style={{ marginTop: "30px" , color: "blue"}}
        />
      </form>
    </div>
    </Container>
    </section>
  );
};
export default Contact;
