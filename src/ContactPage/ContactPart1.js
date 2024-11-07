import React from "react";
import Style from "./ContactPage.module.css";
const ContactPart1 = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"#050709"}}>
    <div className={`${Style.container} container`} >
      <div
        className={`${Style.row} row`}
        
      >
        <div
          className={`${Style.col} col-6`}
        >
          <form
            className={`${Style.form}`}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <h1 className={`${Style.heading}`}>Let’s work together!</h1>
            <h5 className={`${Style.intro}`} style={{ textAlign: "center" }}>
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </h5>
            <input type="hidden" name="access_key" value="9fa987a9-ea90-40ba-bf10-6c057da8816f" />
            <input
              className={`${Style.inp}`}
              placeholder="Your Name"
              type="text"
              name="name"
            />
            <input
             className={`${Style.inp}`}
              placeholder="Email Id"
              type="email"
              name="email"
            />
            <textarea
              className={`${Style.textarea}`}
              name="message"
              placeholder="What can I help you"
            ></textarea>
            <button
              className={`${Style.btn}`}
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className={`${Style.col2} col-6`} >
          <div style={{ fontSize: "1.5rem" }}>
            <li
             className={`${Style.li}`}
            >
              <i
                style={{
                  backgroundColor: "#6E40CB",
                  borderRadius: "50%",
                  height: "4.7vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3vh",
                  width: "2.5vw",
                }}
                class="bx bxs-phone-call"
              ></i>
              <div>
                <h6>Mobile No</h6>
                <p>It's not available</p>
              </div>
            </li>

            <li
              className={`${Style.li}`}
            >
              <i
                style={{
                  backgroundColor: "#6E40CB",
                  borderRadius: "50%",
                  height: "4.7vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3vh",
                  width: "2.5vw",
                }}
                class="bx bxs-map"
              ></i>
              <div>
                <h6>Address</h6>
                <p>
                  Paschim vihar Jwalapuri <br />
                  110087,New Delhi
                </p>
              </div>
            </li>

            <li
              className={`${Style.li}`}
            >
              <i
                style={{
                  backgroundColor: "#6E40CB",
                  borderRadius: "50%",
                  height: "4.7vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3vh",
                  width: "3.5vw",
                }}
                class="bx bxl-gmail"
              ></i>
              <div>
                <h6>Email</h6>
                <p>nikhilkohli2407@gmail.com</p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPart1;
