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
                MYSELF
              </h1>
              <h4 className={`${Style.content}`}>
                I've developed a passion for programming and feel that I've
                gained valuable knowledge along the way, I think… 🤷‍♂️
              </h4>
              <h4 className={`${Style.content}`}>
                I am interested in developing innovative web technologies and
                products, as well as exploring related fields
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
