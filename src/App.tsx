import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'antd';

function App() {
  return (
    <Row justify="center" align="middle" style={{margin: '1rem 1rem'}}>
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  );
}

export default App;
