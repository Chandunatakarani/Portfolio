import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css'; // Add this for custom styling

const projects = [
  {
    title: 'Some Basic JavaScript Projects',
    description:
      'I’ve created a collection of basic JavaScript projects to enhance my skills. These projects include a variety of functionalities and are designed to be user-friendly.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    githubLink: 'https://github.com/Chandunatakarani/JavaScript-projects.git',
  },
  {
    title: 'MealFinder – Recipe Search App',
    description:
      'A meal finder application developed using my frontend skills.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveLink: '#',
    githubLink: 'https://github.com/Chandunatakarani/JSProject.git',
  },
  {
    title: 'Furniture Store',
    description:
      'A furniture store website that showcases a variety of furniture products. Users can browse through categories, view product details, and add items to their cart.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
    liveLink: '#',
    githubLink:
      'https://github.com/Chandunatakarani/React-Furniture-Project.git',
  },
];

const Projects = () => {
  return (
    <div className="projects-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card project-card h-100 shadow-lg">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text text-muted">
                    <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning btn-sm"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
