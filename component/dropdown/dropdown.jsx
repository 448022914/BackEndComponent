import React from 'react';
import "./dropdown.scss";

export default class Dropdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hide: true,
    }
  }
  handleClick = (index, item) => {
    const props = this.props;
    if(props.handleClick){
      props.handleClick(index, item);
    }
    setTimeout(() => {
      this.setState({ hide: true });
    }, 100);
  }
  toggleDropdown = _ => {
    this.setState({ hide: !this.state.hide });
  }
  render(){
    const { icon, label, data } = this.props;
    const { hide } = this.state;
    return(
      <div className="dropdown-box">
        <div className="dropdown-info">
          {
            icon && icon !== "" ? 
            <img src={icon} alt=""/> : null
          }
          <div onClick={this.toggleDropdown}>
            <span>{label} <i className="fa fa-angle-down"></i></span>
          </div>
        </div>
        <ul className={`dropdown-menu ${hide ? "dropdown-hide" : ""}`} 
            style={{ height: hide ? 0 : data.length * 36 + "px" }}>
          {
            data.map((item, index) => {
              return <li onClick={e => this.handleClick(index, item)} key={index}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}