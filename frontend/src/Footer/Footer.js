import React from "react";
import Logo from "./Logo.png";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${Style.container} container-fluid`}>
      <div className={`${Style.row} row`}>
        <div className={`${Style.column} col-12`}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img className={`${Style.Logo}`} src={Logo} />
          </div>

          <div className={`${Style.content}`} >
            <h5>© 2024 All Rights Reserved by Nikhil Kohli</h5>
          </div>

          <div className={`${Style.icons}`}>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.instagram.com/nikhilko_07"
              >
                <i class="bx bxl-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/nikhil-kohli-443a06325/"
              >
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a style={{ color: "white" }} href="https://x.com/NikhilKo_07">
                <i class="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://github.com/nikhilko-07"
              >
                <i class="bx bxl-github"></i>
              </a>
            </li>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
