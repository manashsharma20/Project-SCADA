import React, { Component } from "react";

class Header_Top extends Component {
  state = {};
  render() {
    return (
      <div className="d-none d-md-block " style={{ width: "100%" }}>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <a class="navbar-brand ml-40" href="#">
            <img
              src={require("./images/logo.png")}
              width="60"
              // height="50"
              class="img-responsive"
              alt=""
              style={{}}
            />
          </a>
          <a class="navbar-brand" href="#">
            <h1>SolarSenz</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Admin Console<span class="sr-only">(current)</span>
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <a class="navbar-brand" href="#">
            <img
              src={require("./images/logo.png")}
              width="60"
              // height="50"
              class="img-responsive"
              alt=""
              style={{}}
            />
          </a>
        </nav>
      </div>
    );
  }
}

export default Header_Top;
