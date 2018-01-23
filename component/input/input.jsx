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
          className={styles["my-input"]+" "+
            ((props.prefix || props.nextfix) ? "my-input-icon" : "")+" "+
            (props.prefix ? styles["my-input-prefix"] : "")+" "+
            (props.nextfix ? styles["my-input-nextfix"] : "")} 
        />
        {
          props.nextfix ?
            <span className={`fa fa-${props.nextfix} ${styles["input-nextfix"]}`}></span>
            : null
        }
      </span>
    );
  }
}