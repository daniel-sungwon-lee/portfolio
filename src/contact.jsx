import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default function Contact(props) {
  return (
    <div className="container contact" id="contact">
      <h1 className="text-center">Contact</h1>
      <Bounce>
        <div className="contact-logo-div mt-5 d-flex flex-wrap justify-content-around align-items-center">
          <div className="contact-logo">
            <a href="https://www.linkedin.com/in/daniel-sungwon-lee/" target="_blank" className="text-decoration-none" style={{color: "#0077B5"}}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="contact-logo">
            <a href="https://github.com/daniel-sungwon-lee/" target="_blank" className="text-decoration-none" style={{color: "black"}}>
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="contact-logo img">
            <a href="mailto:danlee333@gmail.com">
              <img src="icons-colored/gmail.svg" width="100"/>
            </a>
          </div>
          <div className="contact-logo img">
            <a href="https://drive.google.com/file/d/1eUHycBYYh7i3KrEvd1beubIMckDCor24/view?usp=sharing" target="_blank">
              <img src="icons-colored/resume.svg" width="100" />
            </a>
          </div>
          <div className="contact-logo img">
            <a href="https://careerkarma.com/profile/cklfoslqxil7e0891ev469cc7/" target="_blank">
              <img src="images/careerkarma.png" width="100" />
            </a>
          </div>
        </div>
      </Bounce>
    </div>
  )
}
