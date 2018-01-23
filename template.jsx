import React from "react";
import styles from "./template.scss";

export default class Template extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={styles["template-box"]}>
        
      </div>
    );
  }
}