import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/About.css'; 

const About = () => {
  return (
    <div className="about-section py-5">
      <div className="container text-white">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">About Me</h1>
          <p className="lead">Here's a bit about me and what drives me!</p>
        </div>

        <div className="mb-5">
          <h2 className="text-warning">Introduction</h2>
          <p>
            Hello! I'm <strong>Natakarani Chandu</strong>, a passionate software developer based in Hyderabad.
            With a background in computer science, I specialize in web development and love building
            scalable applications. Whether it's a seamless frontend or a powerful backend, I thrive on
            solving complex problems and making technology work for people.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-warning">My Skills</h2>
          <ul className="list-group list-group-flush bg-transparent">
            <li className="list-group-item bg-transparent text-white">Frontend: HTML, CSS, JavaScript, React.js</li>
            <li className="list-group-item bg-transparent text-white">Backend: Java, JDBC, Hibernate, Spring Boot</li>
            <li className="list-group-item bg-transparent text-white">Database: MySQL</li>
            <li className="list-group-item bg-transparent text-white">Version Control: Git, GitHub</li>
            <li className="list-group-item bg-transparent text-white">Others: REST APIs, Agile, Unit Testing</li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-warning">Experience</h2>
          <div className="p-3 border rounded bg-dark">
            <h5 className="text-info">Frontend Developer | Devon Technologies India Pvt Ltd</h5>
            <span className="text-muted">April 2024</span>
            <p>
              Recently joined Devon Technologies as a Frontend Developer. I am building
              user-friendly interfaces and enhancing user experiences while learning from seasoned developers.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-warning">Let's Connect</h2>
          <p>
            I’m always open to new opportunities and exciting projects! Feel free to reach out via email or connect on LinkedIn.
          </p>
          <a href="mailto:chandunatakarani@gmail.com" className="btn btn-outline-light btn-lg">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default About;