import React from 'react';
import "./header.scss";

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {headerMenu, label, icon, dropdown} = this.props;
    return(
      <div className="header-box">
        <div className="header-logo"></div>
        <ul className="header-menu">
          {
            headerMenu.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })
          }
        </ul>
        { this.props.children }
      </div>
    )
  }
}