import React from "react";
import "./input.scss";

export default class Input extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const props = this.props;
    return(
      <span className="input-box">
        {
          props.prefix ? 
          <span className={`fa fa-${props.prefix}`}></span>
          : null
        }
        <input 
          {...props} 
          type="text" 
          className={`my-input ${props.prefix ? "my-input-inline" : ""}`} />
      </span>
    )
  }
}