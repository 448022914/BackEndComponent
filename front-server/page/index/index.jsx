import React from "react";
import Header from "../../../component/header/header.jsx";
import Dropdown from "../../../component/dropdown/dropdown.jsx";
import TreeMenu from "../../../component/treeMenu/treeMenu.jsx";

import icon from "../../../images/2.jpeg";

import "./index.scss";

const dropdown = [
  { title: "个人主页" },
  { title: "修改密码" },
  { title: "退出登录" },
];

const headerMenu = [
  { title: "添加日记" }
];

const treeMenu = [
  { name: "系统管理", icon: "cog", path: "", id: "M01", children: [
    { name: "角色管理", icon: "", path: "", id: "M0101", children: [] },
    { name: "日志管理", icon: "", path: "", id: "M0102", children: []}
  ] },
  { name: "日记管理", icon: "cog", path: "", id: "M02", children: [] }
]

export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="index-box">
        <Header label="我的名字" headerMenu={headerMenu} >
          <Dropdown label="我的名字" icon={icon} data={dropdown} />
        </Header>
        <div className="index-center">
          <TreeMenu theme="dark" data={treeMenu} />
          <div className="index-content"></div>
        </div>
      </div>
    )
  }
}