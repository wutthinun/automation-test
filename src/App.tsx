import { Col, Image, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import './App.css';
import banner from './cj_qa.png';

function App() {
  return (
    <>
      <Row justify="center" align="middle" style={{ margin: '1rem 1rem' }}>
        <Col span={4} >
          <Image
            width={200}
            src={banner}
          />
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ margin: '1rem 1rem' }}>
        <Col span={12}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default App;
