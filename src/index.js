import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/neumorph-full-dark.css";
// import "bootstrap/dist/css/newbootstrap.css";
// import "bootstrap/dist/css/black-dashboard-react.css";
import Main from "./components/main";
import * as serviceWorker from "./serviceWorker";
import Popper from "popper.js";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
