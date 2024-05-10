import { Button, Checkbox, Radio, Select } from "antd";
import Form, { FormProps } from "antd/es/form";
import Input from "antd/es/input";
import { useNavigate } from "react-router-dom";
import { FieldType } from "./model";
import { useEffect } from "react";

function RegisterForm() {

    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.removeItem('data');
    }, []);

    const onFinish: FormProps<FieldType>['onFinish'] = (values: FieldType) => {
        localStorage.setItem('data', JSON.stringify(values));
        navigate('/result');
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="register"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="First name"
                name="firstname"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Last name"
                name="lastname"
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item <FieldType>
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please input your gender!' }]}
            >
                <Radio.Group>
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item <FieldType>
                label="Membership Type"
                name="membershipType"
                rules={[{ required: true, message: 'Please select your membership type!' }]}
            >
                <Select options={[
                    {
                        label: 'Silver',
                        value: 'Silver'
                    },
                    {
                        label: 'Gold',
                        value: 'Gold'
                    },
                    {
                        label: 'Premium',
                        value: 'Premium'
                    }
                ]}>
                </Select>
            </Form.Item>

            <Form.Item<FieldType>
                name="tnc"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
                rules={[
                    { validator(rule, value, callback) {
                        if (!value) {
                            callback('Please agree to the terms and conditions!');
                        } else {
                            callback();
                        }
                    },}
                ]}
            >
                <Checkbox>I agree to the terms and conditions</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterForm;