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
            <h1>Know <span style={{color:"#8750F7"}}> Who I'M</span></h1>
            <p> Hi Everyone, I am <span style={{color:"#8750F7"}}> Nikhil Kohli</span> from <span style={{color:"#8750F7"}}> New Delhi, India.</span></p>
            <p> I am currently at<span style={{color:"#8750F7"}}> Unified Mentore Company</span> as a Full Stack Developer.</p>
            <p><span style={{color:"#8750F7"}}>I’m 18</span> years old, a<span style={{color:"#8750F7"}}>Full Stack Web Dev,</span>  and always learning new creative languages to push the limits of code!</p>
            <h5 style={{marginTop:"2%"}}>Besides coding, here are some other activities I'm passionate about!</h5>
            <p> Playing Valorant, <span style={{color:"#8750F7"}}>Minecraft,</span>  Fortnite,<span style={{color:"#8750F7"}}> GTA 5(online),</span> Free Fire etc</p>
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
            <img style={{width:"70%"}} className={`${Style.aboutimg}`}src={Aboutimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage1;
