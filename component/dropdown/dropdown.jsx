import React from 'react';
import styles from "./dropdown.scss";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  handleClick(index, item) {
    const props = this.props;
    if (props.handleClick) {
      props.handleClick(index, item);
    }
    setTimeout(() => {
      this.setState({ hide: true });
    }, 100);
  }
  toggleDropdown() {
    this.setState({ hide: !this.state.hide });
  }
  render() {
    const { icon, label, data } = this.props;
    const { hide } = this.state;
    return (
      <div className={styles["dropdown-box"]}>
        <div className={styles["dropdown-info"]}>
          {
            icon && icon !== "" ?
              <img src={icon} alt="" /> : null
          }
          <div onClick={this.toggleDropdown}>
            <span>{label} <i className={styles["fa"] + " " + styles["fa-angle-down"]}></i></span>
          </div>
        </div>
        <ul className={styles["dropdown-menu"] + " " + styles[`${hide ? "dropdown-hide" : ""}`]}
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