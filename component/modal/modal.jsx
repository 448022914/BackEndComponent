import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.scss";

// 判断react版本
const IS_REACT_16 = !!ReactDOM.createPortal;

export default class Modal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={styles["modal-box"]}>
        
      </div>
    );
  }
}