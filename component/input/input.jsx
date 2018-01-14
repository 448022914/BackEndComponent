import React from "react";
import styles from "./input.scss";

export default class Input extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const props = this.props;
    return(
      <span className={styles["input-box"]}>
        {
          props.prefix ? 
            <span className={`fa fa-${props.prefix} ${styles["input-prefix"]}`}></span>
            : null
        }
        <input 
          {...props} 
          type="text" 
          className={styles["my-input"]+" "+(props.prefix ? styles["my-input-inline"] : "")} />
      </span>
    );
  }
}