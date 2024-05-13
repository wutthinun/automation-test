import React from "react";
import {Button, Form, Input,} from "antd";
import {Link, useNavigate} from "react-router-dom";

import "./login.style.css";
import logo from "src/assets/cj-logo-i.png";

function LoginPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const account = {userName: "admin", password: "password"};



  const onFinish = (values) => {
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
  const onFinishFailed = (errorInfo) => {
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
            <Input />
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
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button className="btn-submit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <div className="register">
            <Link to='/register'>Click for register</Link>
          </div>
          
        </Form>
      </div>
    </div>
  );
}
export default LoginPage;
