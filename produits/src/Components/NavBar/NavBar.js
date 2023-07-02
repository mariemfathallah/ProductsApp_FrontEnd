import "./NavBar.css";

import React from "react";
import { Link } from "react-router-dom";
import image_1 from "../../images/logo (4).png";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  let searchBtn = document.querySelector('.searchBtn');
  let closeBtn = document.querySelector('.closeBtn');
  let searchBox = document.querySelector('.searchBox')



  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-light"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src={image_1} alt="image1" width={100} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/home"}
                >
                  ACCEUIL
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/boutique"}>
                  BOUTIQUE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  À PROPOS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  CONTACT
                </Link>
              </li>
            </ul>
            <form className="d-flex m-5" role="search">
   
              <div className="icons">
                <Link
                  to={"/"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Connexion"
                >
                  <FaUserAlt
                    style={{ position: "relative", right: "50px" }}
                    className="icon-1 d-inline-block"
                  />

                  <Tooltip
                    id="my-tooltip"
                    style={{
                      fontSize: "14px",
                      position: "fixed",
                      textAlign: "center",
                     bottom:'30px'

                    }}
                  />
                </Link>
           
      
              </div>
              <div className="search-icon">
                  <FaSearch  className="searchBtn" />
               
                </div>
                <div className="searchBox">
                  <input type='text'  placeholder="Cherche ici..."/>
                </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
