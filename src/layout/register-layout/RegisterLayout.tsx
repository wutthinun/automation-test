import React from 'react'
import { Outlet } from 'react-router-dom';
import { Col, Image, Row } from 'antd';

import banner from 'src/assets/cj-more.png';

export default function RegisterLayout() {
    return (
        <>
          <Row justify="center" align="middle" style={{ margin: '2rem 1rem' }}>
            <Image
              width={"15%"}
              src={banner}
            />
          </Row>
          <Row justify="center" align="middle" style={{ margin: '1rem 1rem' }}>
            <Col span={12}>
              <Outlet />
            </Col>
          </Row>
        </>
      );
}
