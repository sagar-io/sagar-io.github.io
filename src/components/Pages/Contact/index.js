import cv from "../../../assets/cv/cv.pdf";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function Contact() {
  const popupRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      popupRef.current.style.transform = "translate(-200%)";
      popupRef.current.style.opacity = "0";
    }, 4000);
  }, []);

  return (
    <div className="contact-wrapper">
      <motion.div className="parcel-wrapper">
        <div className="parcel">
          <div className="top-cover"></div>
          <div className="left-cover"></div>
          <div className="bottom-cover"></div>

          <div className="contact-card">
            <img src="./assets/images/user.svg" alt="user-logo" />
            <p className="name">
              Sagar Sharma <i className="fas fa-check-circle"></i>
            </p>
            <a href={cv} download="sagar-sharma-cv.pdf">
              <button className="btn">Download CV</button>
            </a>

            <div className="direct-contact">
              <a href="mailto:tech.sagarsh@gmail.com" className="email">
                <i className="fas fa-light fa-paper-plane"></i>
                tech.sagarsh@gmail.com
              </a>
            </div>

            <div className="direct-contact">
              <a href="tel:919119703846" className="phone">
                <i className="fas fa-regular fa-phone"></i>+91 9119703846
              </a>
            </div>

            <div className="social-icons">
              <a
                className="social-icon linkedin"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sagar-sharma-developer/"
                target="_blank"
                title="LinkedIn Profile"
              >
                <i className="fa fa-brands fa-linkedin fa-2x"></i>
              </a>
              <a
                className="social-icon github"
                rel="noreferrer"
                href="https://github.com/sagar-io"
                target="_blank"
                title="GitHub Profile"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                className="social-icon whatsapp"
                rel="noreferrer"
                href="//api.whatsapp.com/send?phone=919119703846&text=Hi_Sagar_?"
                title="Chat on whatsapp"
                target="_blank"
              >
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="parcel-shadow"></div>

        <div ref={popupRef} className="intro-popup">
          Checkout the Parcel
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
