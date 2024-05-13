import { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";
import { useNavigate } from "react-router-dom";

import { FieldType } from "../../model";

function RegisterResult() {
    const [data, setData] = useState<FieldType | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('data');
        if (data) {
            setData(JSON.parse(data));
        }
    }, []);

    return (
        <>
            <Descriptions column={1} title="Register Result">
                <Descriptions.Item label="Name">{data?.firstname} {data?.lastname}</Descriptions.Item>
                <Descriptions.Item label="Gender">{data?.gender}</Descriptions.Item>
                <Descriptions.Item label="Membership Type">{data?.membershipType}</Descriptions.Item>
                <Descriptions.Item label="Terms and Conditions">{data?.tnc ? 'Agree' : 'Disagree'}</Descriptions.Item>
            </Descriptions>

            <Button 
            block 
            id="goto-login"
			test-id="goto-login"
            onClick={() => {
                navigate('/form');
            }}>Login</Button>
        </>
    );
}

export default RegisterResult;