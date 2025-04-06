import boy_home from "../assets/home-right.png";
import resume from "../assets/resume3.pdf";

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center vh-100 bg-dark text-white"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h4>Full-stack Web Developer</h4>
            <h1 className="fw-bold">Sharvan Kumar</h1>
            <p>
              My passion for software lies with dreaming up ideas and making
              them come true with elegant interfaces. I take great care in the
              experience, architecture, and code quality of the things I build.
            </p>
            <div className="d-flex gap-3">
              <a
                href={resume}
                className="btn btn-outline-info"
                download={resume}
              >
                Download CV
              </a>
              <a href="#contact" className="btn btn-info">
                Contact
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="position-relative">
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: "250px", height: "250px", margin: "auto" }}
              >
                <img
                  src={boy_home}
                  alt="Profile"
                  className="img-fluid"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
