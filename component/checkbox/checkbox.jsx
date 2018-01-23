import React from "react";
import styles from "./checkbox.scss";

export default class Checkbox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const props = this.props;
    return(
      <div className={styles["checkbox-box"]}>
        <label>
          <input 
            {...props}
            type="checkbox"
          />{props.label}
        </label>
      </div>
    );
  }
}