import React from "react";
import styles from "./login.scss";

import Card from "../../../component/card/card.jsx";
import Form from "../../../component/form/form.jsx";
import Input from "../../../component/input/input.jsx";
import Button from "../../../component/button/button.jsx";

const FormItem = Form.Item;

export default class Login extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={styles["login-box"]}>
        <Card className={styles["login-inner"]}>
          <Form>
            <FormItem>
              <Input prefix="user-o" placeholder="请输入登录名称" />
            </FormItem>
            <FormItem>
              <Input prefix="lock" placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button className={styles["login-btn"]} type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}