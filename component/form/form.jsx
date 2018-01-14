import React from "react";
import styles from "./form.scss";

function Form(props) {
  return (
    <form onSubmit="return false">
      {props.children}
    </form>
  );
}
Form.Item = function (props) {
  return (
    <div className={styles["form-item"] + " "+ styles[`form-item-${props.direction}`]}>
      {
        props.label ?
          <label className={styles["form-item-title"]}>
            {
              props.isRequire != null ?
                <span className={styles["item-title-require"]}>*</span>
                : null
            }
            {props.label}：
          </label>
          : null
      }
      <div className={styles["form-item-content"]}>
        {props.children}
        <span className={styles["form-item-tip"]}></span>
      </div>
    </div>
  );
};

Form.Item.defaultProps = {
  direction: "horizontal"
};

export default Form;