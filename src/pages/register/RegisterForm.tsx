import { useEffect } from "react";
import { Button, Checkbox, Radio, Select } from "antd";
import Form, { FormProps } from "antd/es/form";
import Input from "antd/es/input";
import { useNavigate } from "react-router-dom";

import "./register.style.css";
import { FieldType } from "../../model";

function RegisterForm() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("data");
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    localStorage.setItem("data", JSON.stringify(values));
    navigate("/register/result");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo: any
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-container">
      <Form
        name="register"
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="User name"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input id="username" test-id="username" size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password id="password" test-id="password" size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="First name"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input id="firstname" test-id="firstname" size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Last name"
          name="lastname"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input id="lastname" test-id="lastname" size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please input your gender!" }]}
        >
          <Radio.Group>
            <Radio
              id="gender-male"
              test-id="gender-male"
              value="Male"
              style={{ fontSize: "16px" }}
            >
              &nbsp;Male
            </Radio>
            <Radio
              id="gender-female"
              test-id="gender-female"
              value="Female"
              style={{ fontSize: "16px" }}
            >
              &nbsp;Female
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<FieldType>
          label="Membership Type"
          name="membershipType"
          rules={[
            { required: true, message: "Please select your membership type!" },
          ]}
        >
          <Select
            id="membership-type"
            test-id="membership-type"
            size="large"
            options={[
              {
                label: "Silver",
                value: "Silver",
              },
              {
                label: "Gold",
                value: "Gold",
              },
              {
                label: "Premium",
                value: "Premium",
              },
            ]}
          ></Select>
        </Form.Item>

        <Form.Item<FieldType>
          name="tnc"
          valuePropName="checked"
          rules={[
            {
              validator(rule, value, callback) {
                if (!value) {
                  callback("Please agree to the terms and conditions!");
                } else {
                  callback();
                }
              },
            },
          ]}
        >
          <Checkbox id="terms-cons" test-id="terms-cons">
            I agree to the terms and conditions
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            id="register-submit"
            test-id="register-submit"
            style={{ width: "100%" }}
            size="large"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterForm;
