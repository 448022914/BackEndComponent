import React from "react";
import styles from "./header.scss";

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {headerMenu} = this.props;
    return(
      <div className={styles["header-box"]}>
        <div className={styles["header-logo"]}></div>
        <ul className={styles["header-menu"]}>
          {
            headerMenu.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })
          }
        </ul>
        { this.props.children }
      </div>
    );
  }
}