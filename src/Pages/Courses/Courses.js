import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav'


const Courses = () => {
  return (
    <Container className="mt-4">
    <Row>
      <Col lg="4" className="d-none d-lg-block">
        <LeftSideNav/>
      </Col>
      <Col lg="8">
      <RightSideNav/>
      </Col>
    </Row>
  </Container>
  )
}

export default Courses