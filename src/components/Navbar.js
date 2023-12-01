import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        < div className="container-fluid">

          <Link className="navbar-brand" to="/">
            {props.name}
          </Link>
           {/* <a className="navbar-brand" href="#">
            {props.title}
          </a> */}
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
          < div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                 {/* <a className="nav-link active" aria-current="page" href="#">
                  {props.category}
                </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">
                  About
                </a> */}
              </li>
               
            </ul>

            <button type="button" onClick={props.change} className="btn btn-primary mx-2" >
              Blue
            </button>
            <button type="button" onClick={props.change2} className="btn btn-secondary mx-2">
              Grey
            </button>
            <button type="button" onClick={props.change3} className="btn btn-danger mx-2">
              Red
            </button>
            <button type="button" onClick={props.change4} className="btn btn-warning mx-2">
              Yellow
            </button>


            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              } mx-3`}
            >
              <input
                className="form-check-input"
                onClick={()=>{props.toggleMode(null)}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {/* Enable {props.mode === "light" ? "dark" : "light"} Mode */}
                {props.btText} Dark Mode


              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
// 	title:PropTypes.String.isRequired,
// 	category:PropTypes.String
// }

// Navbar.defaultProps = {
//   title: "set it",
//   category: "set",
// };
