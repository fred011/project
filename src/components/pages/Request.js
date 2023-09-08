import React, { useRef } from "react";
import Navy from "../Navy";
import SideBar from "../SideBar.jsx";
import emailjs from "emailjs-com";

function Request() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1r8747",
        "template_ncacmtb",
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
  };
  return (
    <div>
      <div>
        <Navy />
      </div>
      <div className="hello">
        <SideBar />
        <div>
          <div
            className="container border"
            style={{
              marginTop: "10px",
              width: "100%",
              backgroundImage: `url('https://images.hdqwalls.com/download/purple-galaxy-abstract-4k-oz-2560x1700.jpg')`,
              backgroundPosition: "center",
            }}
          >
            <h1 style={{ marginTop: "15px", color: "white" }}>
              Request for assisstance from Our Certified Teachers
            </h1>
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
              />

              <label>Email</label>
              <input
                type="text"
                name="intructors_email"
                className="form-control"
                placeholder="Your Email"
              />
              <label>Email</label>
              <input
                type="text"
                name="user_email"
                className="form-control"
                placeholder="Instructor`s Email"
              />

              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder=""
              />
              <input
                type="submit"
                value="Send"
                className="form-control btn btn-primary"
                style={{ marginTop: "30px", color: "blue" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
