import React from "react";
import { socialMediaLinks } from "../../portfolio";
import MailIconPNG from "../../assets/images/mail.png";
import MailIconGIF from "../../assets/images/mail.gif";
import "./SocialMedia.css";

export default function socialMedia(props) {
  return (
    <div
      className={`${
        props.page === "home" ? "social-media-div" : "contact-social-media-div"
      }`}
    >
      <a
        href={socialMediaLinks.whatsapp}
        // className="social-icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-2x fa-whatsapp"></i>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        // className="social-icon linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-2x fa-linkedin-in"></i>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="social-icon google"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i className="fab fa-google"></i> */}
        <img
          src={MailIconPNG}
          className="mail-img google-icon"
          alt="mail-icon-png"
        />
        <img
          src={MailIconGIF}
          className="mail-gif google-icon"
          alt="mail-icon-gif"
        />
      </a>
    </div>
  );
}
