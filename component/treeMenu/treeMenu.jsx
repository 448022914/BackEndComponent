import React from "react";

import './treeMenu.scss';

export default class TreeMenu extends React.Component{
  constructor(props){
    super(props);
    this.level = 0; // 菜单的深度
    this.padLeft = 16;
    this.preElem = null;
    this.state = {
      list: props.data
    }
  }
  componentWillMount(){
    let {list} = this.state;
    let result = this.addMenuField(list);
    this.setState({ list: result });
  }
  addMenuField = (list, pItem) => { // 给每个节点添加属性
    this.level++;
    list.forEach((item, index) => {
      item.level = this.level; // 在数组中的层级
      item.menuLevel = pItem ? pItem.menuLevel+"-"+(+pItem.children.indexOf(item)) : index.toString(); // 对应的菜单层级
      item.selected = false;
      if(item.children && item.children.length !== 0){
        item.isHide = item.hasChildren = true;
        this.addMenuField(item.children, item);
      }else{
        item.isHide = item.hasChildren = false;
      }
    });
    this.level--;
    return list;
  }
  init = (list) => { // 初始化菜单
    let result = [];
    list.forEach(item => {
      let style = {paddingLeft: item.level * this.padLeft + "px"};
      if(item.hasChildren){
        let sonLi = this.init(item.children);
        result.push(
          <li key={item.id}>
            <div style={style} 
                 onClick={e => this.onClick(item, e)}
                 className={`menu-item-title ${item.selected ? "menu-item-selected" : ""}`}>
              {item.icon && item.icon !== "" ? <i class={`fa fa-${item.icon}`}></i> : null}
              <span className="item-title">{item.name}</span>
              <span class={`fa fa-angle-right ${item.isHide ? "" : "menu-show"}`}></span>
            </div>
            <ul className={`menu-sub ${item.isHide ? "menu-sub-hide" : "" }`}>{sonLi}</ul>
          </li>
        )
      }else{
        result.push(
          <li style={style} 
              onClick={e => this.onClick(item, e)}
              key={item.id} className={`menu-item ${item.selected ? "menu-item-selected" : ""}`}>
            {item.icon && item.icon !== "" ? <i class={`fa fa-${item.icon}`}></i> : null}
            <span className="item-title">{item.name}</span>
          </li>
        );
      }
    })
    return result;
  }
  onClick = (item) => { // 点击菜单
    let list = this.state.list;
    function getElem(elem){ // 查找对应层级的菜单
      let menuarr = elem.menuLevel.split("-");
      let target = null, index = 0;
      while(index < menuarr.length){
        target = index === 0 ? list[menuarr[index]] : target.children[menuarr[index]];
        index++;
      }
      return target;
    }

    let cur = getElem(item);
    if(cur.hasChildren){
      cur.isHide = !cur.isHide;
    }else{
      if(this.preElem){ // 清除上一次选中
        let pre = getElem(this.preElem);
        pre.selected = false;
      }
      cur.selected = true;
    }

    this.setState({ list }, _ => {
      if(!item.hasChildren) this.preElem = item;
    });
  }
  render(){
    const props = this.props
    return (
      <div className="menu-box">
        <ul className={`${props.theme ? props.theme : ""}`}>{ this.init(this.state.list) }</ul>
      </div>
    )
  }
}