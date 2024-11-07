import React from "react";
import Style from "./HomePage.module.css";
const HomePart2 = () => {
  return (
    <div className={`${Style.part3}`}>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{ height: "100%",width:"70%"}}>
              <h1 style={{ marginBottom: "5%", textAlign: "center" }}>
                LET ME <span style={{ color: "#8750F7" }}> INTRODUCE</span>{" "}
                MYSELF
              </h1>
              <h4 style={{textAlign:"center"}}>
                I've developed a passion for programming and feel that I've
                gained valuable knowledge along the way, I think… 🤷‍♂️
              </h4>
              <h4 style={{marginTop:"4%",textAlign:"center"}}>
                I am interested in developing innovative web technologies and
                products, as well as exploring related fields
              </h4>
              <h4 style={{marginTop:"4%",textAlign:"center"}}>
                I am skilled in classic technologies such as JS, NodeJS,
                MongoDB, HTML, CSS, React, etc.
              </h4>
              <h4 style={{marginTop:"4%",textAlign:"center"}}>
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
