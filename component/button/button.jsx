import React from "react";
import "./button.scss";

export default class Button extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const props = this.props;
    const typeList = ["primary", "warning", "danger", "default"];
    let type = "default";
    if(!props.type || typeList.indexOf(props.type)) type = "default";
    return(
      <button 
        {...props}
        className={`btn btn-${type} ${props.cls ? props.cls : ""}`}>{this.props.children}</button>
    )
  }
}