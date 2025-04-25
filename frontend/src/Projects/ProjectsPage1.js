import React from 'react'
import Style from './ProjectPage.module.css';
import Linkedin from "./Linkedin.png";
import Soil from "./Soil.png";
import VideoChat from "./VideoChat.png";
import Cater from "./cater.png";

const ProjectsPage1 = () => {
  return (
    <div className={`${Style.container} container`}>
      <h1 className={Style.header}>My Recent Works</h1>
      <div className={Style.list}>
          <li><img src={Linkedin}/><span><a className={Style.links} href="https://github.com/nikhilko-07/LinkedinClone"><h3>Linkedin Clone Project</h3><p>click to go github page</p></a></span></li>
          <li><img src={Soil}/><span><a className={Style.links} href="https://github.com/nikhilko-07/Soil-Agriculture"><h3>Soil info Project</h3><p>click to go github page</p></a></span></li>
          <li><img src={VideoChat}/><span><a className={Style.links} href="https://github.com/nikhilko-07/LOOP-Video-Meet"><h3>Zoom Clone Project</h3><p>click to go github page</p></a></span></li>
          <li><img src={Cater}/><span><a href="https://github.com/nikhilko-07/Catering-App" className={Style.links} ><h3>Catering Order Project</h3><p>click to go github page</p></a></span></li>
      </div>
    </div>
  )
}

export default ProjectsPage1;