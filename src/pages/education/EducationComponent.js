import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { Fade } from "react-reveal";
import "./EducationComponent.css";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification
              </h3> */}
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I hold a Bachelor of Technology in Computer Science Engineering from Guru Jambheshwar University of Science and Technology. Prior to that, I completed a 3-year Polytechnic Diploma in Computer Engineering from Govt. Polytechnic. These educational experiences have equipped me with a strong foundation in both theoretical concepts and practical applications within the field of computer science and engineering. Through rigorous coursework and hands-on training, I have developed proficiency in various areas such as programming languages, software development, networking, and system architecture. These educational achievements reflect my dedication to learning and my passion for technology.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/* <Certifications theme={props.theme} /> */}
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
