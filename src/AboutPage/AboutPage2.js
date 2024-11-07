import React from "react";
import Style from "./AboutPage.module.css";
import jsimg from './Logos/js.png';
import mongoimg from './Logos/mongo.png';
import reactimg from './Logos/react.png';
import expressimg from './Logos/express.png';
import nodeimg from './Logos/node.png';
import redux from './Logos/redux.png';

const AboutPage2 = () => {
  return (
    <div className={`${Style.container2} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-12" >
            <h1
            className={`${Style.skills}`}
           
            >
              My Skills
            </h1>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h5 className={`${Style.content}`}>
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </h5>
            </div>
            <div className={`${Style.langs}`} >
              <div className={`${Style.logos}`}><div ><img  alt="logo"src={reactimg} /> <h6>80%</h6></div><p className={`${Style.title}`}>React</p></div>
              <div className={`${Style.logos}`}><div ><img  alt="logo"src={jsimg} />     <h6>84%</h6></div><p className={`${Style.title}`}>JavaScript</p></div>
              <div className={`${Style.logos}`}><div ><img  alt="logo"src={mongoimg} />  <h6>96%</h6></div><p className={`${Style.title}`}>MongoDB</p></div>
              <div className={`${Style.logos}`}><div ><img  alt="logo"src={expressimg} /><h6>89%</h6></div><p className={`${Style.title}`}>Express</p></div>
              <div className={`${Style.logos}`}><div ><img  alt="logo"src={nodeimg} />   <h6>84%</h6></div><p className={`${Style.title}`}>Node</p></div>
              <div className={`${Style.logos}`}><div ><img  alt="logo"src={redux} />     <h6>70%</h6></div><p className={`${Style.title}`}>Redux</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage2;
