import React from "react";
import { render } from "react-dom";

import styles from "./home.scss";

import Index from "./page/index/index";
import Login from "./page/login/login";

import Input from "./../component/input/input";
import Timepicker from "./../component/timepicker/timepicker";

render(
  <div style={{width: "220px"}}>
    <Timepicker />
  </div>,
  document.getElementById("app"),
)