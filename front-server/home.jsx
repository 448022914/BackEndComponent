import React from "react";
import { render } from "react-dom";

import styles from "./home.scss";

import Index from "./page/index/index.jsx";
import Login from "./page/login/login.jsx";

import Input from "./../component/input/input.jsx";

render(
  <Login />,
  document.getElementById("app"),
)