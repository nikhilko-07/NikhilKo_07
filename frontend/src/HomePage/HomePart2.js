import React from "react";
import Style from "./HomePage.module.css";
const HomePart2 = () => {
  return (
    <div className={`${Style.part3}`}>
      <div className="container">
        <div className="row">
          <div className={`${Style.wrapper} col-12`}>
            <div className={`${Style.information}`}>
              <h1 className={`${Style.heading}`}>
                LET ME <span style={{ color: "#8750F7" }}> INTRODUCE</span>{" "}
              </h1>
              <h4 className={`${Style.content}`}>
              I’ve learned how to turn ideas into functional, interactive designs that capture attention and provide value to users across various devices.
              </h4>
              <h4 className={`${Style.content}`}>
                Programming in my passion, that's the reason I am working at the time of my academic career.
              </h4>
              <h4 className={`${Style.content}`}>
                I am skilled in classic technologies such as JS, NodeJS,
                MongoDB, HTML, CSS, React, etc.
              </h4>
              <h4 className={`${Style.content}`}>
                I have a passion for creating cutting-edge web technologies and
                products, along with a keen interest in related areas. Node.js
                and Modern Javascript Library and Frameworks like React.js and
                Next.js.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart2;
