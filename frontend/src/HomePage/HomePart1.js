import React from "react";
import Style from "./HomePage.module.css";
import Profile from "./Profile.png";
import CV from "./docs/Nikhil Resume.docx";
const HomePart1 = () => {
  return (
    <div className={`${Style.container} container`}>
      <div
        className={`${Style.row} row`}>
        <div className={`${Style.part1} col-6`}>
          <div>
            <h2 className={`${Style.name}`}>I'm Nikhil Kohli</h2>
            <h3 className={`${Style.dev}`}>Full Stack Developer </h3>

            <h4 className={`${Style.info}`}>
              I break down complex user experience problems to create integrity
              focussed solutions that connect billions of people
            </h4>
          </div>
          <div className={`${Style.btns}`}>
          <a download="Nikhil_Kohli_Resume.docx" href={CV} style={{textDecoration:"none"}} className={`${Style.cv}`}>
              Download CV
            </a>
            <div className={`${Style.icons}`}>
              <li>
                <a style={{color:"white"}} href="https://www.instagram.com/nikhilko_07">
                <i class='bx bxl-instagram-alt'  ></i>
                </a>
              </li>
              <li>
                <a style={{color:"white"}}  href="https://www.linkedin.com/in/nikhil-kohli-443a06325/">
                <i class='bx bxl-linkedin-square' ></i>
                </a>
              </li>{" "}
              <li>
                <a style={{color:"white"}}  href="https://x.com/NikhilKo_07">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a style={{color:"white"}} href="https://github.com/nikhilko-07">
                  <i class="bx bxl-github"></i>
                </a>
              </li>{" "}
            </div>
          </div>
        </div>
        <div className={`${Style.part2} col-6`}>
          <img  className={`${Style.Profile}`} src={Profile} />
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
