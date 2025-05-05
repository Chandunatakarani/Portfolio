import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-section py-5">
      <div className="container text-white">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Get In Touch</h1>
          <p className="lead">I'd love to hear from you! Feel free to reach out via the form below or email me directly.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-outline-light btn-lg">Send Message</button>
              </div>
            </form>

            <div className="mt-5 text-center">
              <p>Or email me directly at:</p>
              <a href="mailto:chandunatakarani@gmail.com" className="text-info fw-bold nounder">chandunatakarani@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
