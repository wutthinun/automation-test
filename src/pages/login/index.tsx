import React from "react";
import {Button, Form, Input,} from "antd";
import {Link, useNavigate} from "react-router-dom";

import "./login.style.css";
import logo from "src/assets/cj-logo-i.png";
type FormValueType = {
  userName: string
  password: string
}
function LoginPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const account = {userName: "admin", password: "password"};

  const onFinish = (values:FormValueType) => {
    console.log("Success:", values);
    if (
      values.userName === account.userName &&
      values.password === account.password
    ) {
      navigate(`/home/${values.userName}`);
    } else {
      form.setFields([
        {
          name: "userName",
          errors: ["Invalid user name"],
        },
        {
          name: "password",
          errors: ["Invalid password"],
        },
      ]);
    }
  };
  const onFinishFailed = (errorInfo:any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-wrapper">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <b>
            CJ More System
          </b>
        </header>
      </div>
     
      <div className="form-container ">
        <Form
          form={form}
          name="basic"
          layout="vertical"
          autoComplete="off"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input id="username" test-id="username" size="large"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password  id="password" test-id="password" size="large"/>
          </Form.Item>

          <Form.Item>
            <Button className="btn-submit" type="primary" htmlType="submit" size="large" id="btn-submit" test-id="btn-submit">
              Submit
            </Button>
          </Form.Item>
          <div className="register">
            <Link id="hpl-register" test-id="hpl-register" to='/register' style={{color:"#019c50"}}>Click for register</Link>
          </div>
          
        </Form>
      </div>
    </div>
  );
}
export default LoginPage;
