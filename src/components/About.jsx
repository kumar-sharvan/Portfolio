import React from "react";
import boy from "../assets/boy.svg";

function About() {
  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#1d1d1d",
        color: "#fff",
        padding: "5rem 0",
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center">
        {/* Left Side (Text Content) */}
        <div className="col-md-6">
          <h2 className="fw-bold text-info mb-3">Who I am</h2>
          <p className="lead">
            My name is Sharvan Kumar. I'm a Full-stack Web Developer.
          </p>
          <p>
            I have been passionate about new technologies and computers since
            childhood. That's why I chose Computer Science Engineering. In
            college, I realized it was not for me. I remember the first time I
            wrote a code using the C language; words failed to express how I
            felt in that moment.
          </p>
          <p>It was the turning point in my life.</p>
        </div>

        {/* Right Side (Image) */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={boy}
            alt="About"
            className="img-fluid"
            style={{ maxWidth: "50%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
