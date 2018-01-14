import React from "react";
import styles from "./button.scss";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    const typeList = ["primary", "warning", "danger", "default"];
    let type = props.type;
    if (!props.type || typeList.indexOf(props.type) === -1) type = "default";
    return (
      <button
        {...props}
        className={styles["btn"] + " " + styles[`btn-${type}`] + " " + (props.className ? props.className : "")}>{this.props.children}</button>
    );
  }
}