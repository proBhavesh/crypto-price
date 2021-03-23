import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import logo from "../assets/blob.svg";

const Navbar = () => {
  return (
    <>
      <section className="navbar-sec ">
        <div className="box">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            {/*Navbar logo brand logo*/}
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <figure className="image ">
                  <img src={logo} className="is-rounded  is-square" />
                </figure>
              </a>
              {/* // burger menu*/}

              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            {/* navbar-items*/}
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item ">Home</a>
                <a className="navbar-item ">Coins</a>
                <a className="navbar-item ">Historical Data</a>
                <a className="navbar-item ">Exchanges</a>
                <a className="navbar-item  ">Documentation</a>
              </div>
            </div>

            {/*Seach bar*/}

            <div className="control navbar-end ">
              <input type="text" className="input" placeholder="Search..." />
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
