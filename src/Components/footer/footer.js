import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="contact-body" id="contact">
        <h2>Contact me</h2>
        <p>Get in touch with me</p>
        <div class="container">
          <div class="col-left">
            <div class="socials">
              <a class="btn" href="https://github.com/aussftw">
                <i class="fab fa-github" />
              </a>
              <a
                class="btn"
                href="https://www.linkedin.com/in/alexander-k-7a7a32165/"
              >
                <i class="fab fa-linkedin-in" />
              </a>
              <a class="btn" href="https://www.instsagram.com/auscapulet">
                <i class="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div class="col-right">
            <div class="contacts-container" />
          </div>
        </div>
      </div>
      <div className="footer-text">
        Developed and Made with
        <span className="brown">&#x2665;</span>
        <div>by Alexander Kaminskiy &copy; 2019</div>
      </div>
    </footer>
  );
};

export default Footer;
