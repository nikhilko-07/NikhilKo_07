import React from "react";
import Style from "./AboutPage.module.css";
import Aboutimg from "./Aboutimg.webp";

const AboutPage1 = () => {
  return (
    <div className={`${Style.container1} container`}>
      <div
        className={`${Style.row}`}
       
      >
        <div className={`${Style.intro} col-6`}>
          <div>
            <h1>Know Who I'M</h1>
            <p>Hi Everyone, I am Nikhil Kohli from New Delhi, India.</p>
            <p>I am currently Full Stack Developer at Unified Mentore Company.</p>

            <h4>Apart from coding, some other activities that I love to do!</h4>
            <p> Playing Valorant, Minecraft, Fortnite, GTA 5(online), etc</p>
          </div>
        </div>
        <div className={`${Style.aboutcontainer} col-6`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className={`${Style.aboutimg}`}src={Aboutimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage1;
