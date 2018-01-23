import React from "react";
import Input from "../input/input";
import styles from "./timepicker.scss";

export default class Timepicker extends React.Component {
  constructor(props) {
    super(props);
    this.defaultH = 30;
    this.hourEle = null;
    this.minuteEle = null;
    this.secondEle = null;
    this.state = {
      hourList: [],
      minuteList: [],
      secondList: [],
    };
  }
  getHour(hour) {
    let time = 24, arr = [];
    if (hour && hour.disabled) return;
    Array.from({ length: time }).map((item, index) => {
      let getHour = index < 10 ? "0" + index : index,
        selected = false, disabled = false;
      if (hour && +hour.value === +getHour) selected = true;
      arr.push({ selected, disabled, value: getHour });
    });
    this.setState({
      hourList: arr
    }, () => {
      if (hour) this.animate("hour", +hour.value);
    });
  }
  getMinute(minute) {
    let time = 60, arr = [];
    if (minute && minute.disabled) return;
    Array.from({ length: time }).map((item, index) => {
      let getMinute = index < 10 ? "0" + index : index,
        selected = false, disabled = false;
      if (minute && +minute.value === +getMinute) selected = true;
      arr.push({ selected, disabled, value: getMinute });
    });
    this.setState({
      minuteList: arr
    }, () => {
      if (minute) this.animate("minute", +minute.value);
    });
  }
  getSecond(second) {
    let time = 60, arr = [];
    if (second && second.disabled) return;
    Array.from({ length: time }).map((item, index) => {
      let getSecond = index < 10 ? "0" + index : index,
        selected = false, disabled = false;
      if (second && +second.value === +getSecond) selected = true;
      arr.push({ selected, disabled, value: getSecond });
    });
    this.setState({
      secondList: arr
    }, () => {
      if (second) this.animate("second", +second.value);
    });
  }
  animate(type, value) {
    const requestAnimationFrame = window.requestAnimationFrame;
    let element = this[type + "Ele"];
    let scrollTop = element.scrollTop;
    let targetTop = value * this.defaultH;
    if(scrollTop === targetTop) return;
    let result = Math.abs(scrollTop - targetTop);
    let speed = result > 10 ? 6 : result < 2 ? 1 : 2;
    requestAnimationFrame(() => {
      if (scrollTop < targetTop) {
        element.scrollTop = scrollTop + speed;
      } else if (scrollTop > targetTop){
        element.scrollTop = scrollTop - speed;
      }
      this.animate(type, value);
    });
  }
  componentWillMount() {
    this.getHour();
    this.getMinute();
    if (this.props.renderSecond) {
      this.getSecond();
    }
  }
  render() {
    const { hourList, minuteList, secondList } = this.state;
    const { renderSecond } = this.props;
    return (
      <div className={styles["timepicker-box"]}>
        <Input placeholder="请输入时间" nextfix="clock-o" />
        <div className={styles["timepicker-box-select"]}>
          <div ref={instance => this.hourEle = instance} className={styles["timepicker-box-hour"]}>
            <ul>
              {
                hourList.map((item, index) => {
                  return <li
                    onClick={e => this.getHour(item)}
                    className={styles[item.selected ? "time-selected" : ""]}
                    key={index}>{item.value}</li>;
                })
              }
            </ul>
          </div>
          <div ref={instance => this.minuteEle = instance} className={styles["timepicker-box-minute"]}>
            <ul>
              {
                minuteList.map((item, index) => {
                  return <li
                    onClick={e => this.getMinute(item)}
                    className={styles[item.selected ? "time-selected" : ""]}
                    key={index}>{item.value}</li>;
                })
              }
            </ul>
          </div>
          {
            renderSecond ?
              <div ref={instance => this.secondEle = instance} className={styles["timepicker-box-second"]}>
                <ul>
                  {
                    secondList.map((item, index) => {
                      return <li
                        onClick={e => this.getSecond(item)}
                        className={styles[item.selected ? "time-selected" : ""]}
                        key={index}>{item.value}</li>;
                    })
                  }
                </ul>
              </div> : null
          }
        </div>
      </div>
    );
  }
}

Timepicker.defaultProps = {
  renderSecond: true,
};