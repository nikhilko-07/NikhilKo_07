import React, { useState, useEffect } from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";

import Logo from "./Logo.png"; // Ensure the path to your logo is correct
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg text-white ${
        isScrolled ? "bg-black" : ""
      }`}
      style={{
        height: "10vh",
        position: "sticky",
        top: "0",
        zIndex: "99",
        boxShadow: isScrolled ? "0 0px 40px #8750F7" : "none",
        transition: "box-shadow 0.3s ease, background-color 0.3s ease",
      }}
    >
      <div className="container text-white">
        <a className="navbar-brand" href="/">
          <img width={50} src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span><i class='bx bx-list-ul' style={{color:"white",fontSize:"2rem"}}></i></span>
        </button>
        <div
          className={`text-white container ${
            !isScrolled ? Style["bg-custom"] : "bg-black"
          } collapse navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto links" style={{gap:"10%"}}>
                <li ><Link className={`${Style.linkhover}`} to="/">Home</Link></li>
                <li ><Link className={`${Style.linkhover}`} to="/about">About</Link></li>
                <li ><Link className={`${Style.linkhover}`} to="/product">Projects</Link></li>
                <li ><Link className={`${Style.linkhover}`} to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
