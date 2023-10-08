import React from "react";
import SideBar from "../SideBar.jsx";
import Navy from "../Navy.js";
import "../dashboard.css";
import { useNavigate } from "react-router-dom";
import "../About.css";

function About() {
  const navigate = useNavigate();
  function handlePress(e) {
    e.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div>
      <div>
        <Navy />
      </div>
      <div className="hello">
        <SideBar />

        <div className="dex">
          <h1>Simlab: Science Education Hub</h1>
          <div className="image">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg"
                alt="science pic"
              />
            </div>
            <h3>
              Welcome to Simlab, your one-stop destination for high-quality
              physics and chemistry experiments and lessons designed exclusively
              for high school learners. At Simlab, we are committed to making
              science education engaging, accessible, and fun, empowering
              students like you to explore the fascinating world of physics and
              chemistry with confidence.
            </h3>
            
          
          <h1 style={{ textDecoration: "underline" }}>Our Mission</h1>
          
            
            <h4 style={{ marginLeft: "20px" }}>
              Our mission is simple yet profound: to ignite your passion for
              science by providing you with a comprehensive collection of video
              experiments and lessons that simplify complex concepts and bring
              science to life. We believe that everyone can excel in physics and
              chemistry with the right resources and support, and we're here to
              provide just that.
            </h4>
            <div className="image">
              <img
                src="https://media.istockphoto.com/id/1207700784/photo/dropping-yellow-liquid-sample-to-test-tube-with-microscope-medical-pharmaceutical-and.jpg?s=612x612&w=0&k=20&c=T3j492-zln7vze4o5xY8jdjrjhYxiPpWpxg4VOrJ8qs="
                alt="lab pic"
              />
            </div>
          
          <h1 style={{ textDecoration: "underline" }}>What Sets Us Apart</h1>

          <h3 style={{ marginBottom: "20px" }}>
            What makes Simlab stand out from the rest is our dedication to
            delivering the best learning experience possible. Here are some key
            features that make us unique:
          </h3>
          <h4 style={{ marginBottom: "20px" }}>
            1.Curated Video Content: We understand that learning science is not
            just about reading textbooks. Our platform features a rich library
            of videos for physics and chemistry experiments, each presented by
            four different expert instructors. This diversity in teaching styles
            ensures that you find the approach that suits you best.{" "}
          </h4>
          <h4 style={{ marginBottom: "20px" }}>
            2.Comprehensive Lessons: Our lessons go beyond just demonstrations.
            We break down complex topics into easy-to-understand segments,
            ensuring that you grasp the fundamental principles and applications
            of physics and chemistry.
          </h4>
          <h4 style={{ marginBottom: "20px" }}>
            3. Additional Resources: For every experiment or lesson, we provide
            links to additional information and resources, allowing you to dive
            deeper into the subject matter if you desire.{" "}
          </h4>
          <h4 style={{ marginBottom: "20px" }}>
            4.Instructor Assistance: If you have questions or need extra help
            with a particular topic, our platform includes a built-in function
            that allows you to send an email directly to the instructor for
            personalized assistance. We're here to support your learning journey
            every step of the way.
          </h4>
          <h1 style={{ textDecoration: "underline" }}>Get Started Today</h1>
          <h4>
            Whether you're preparing for an upcoming exam, working on a school
            project, or simply curious about the wonders of science, Simlab is
            here to guide you. Join us on this exciting educational adventure,
            and let's explore the world of physics and chemistry together.
          </h4>
          <h4 style={{ marginBottom: "20px" }}>
            Thank you for choosing Simlab as your trusted science education
            partner. We are excited to be a part of your learning journey and
            look forward to helping you achieve your academic goals. If you have
            any questions, feedback, or suggestions, please don't hesitate to
            reach out to us. Your success is our success!
          </h4>
          <h2 style={{ textDecoration: "underline", marginBottom: "20px" }}>
            Start exploring, start learning, and start discovering the magic of
            science with Simlab!
          </h2>
          <button
            className="btn"
            onClick={handlePress}
            style={{ marginBottom: "20px" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
