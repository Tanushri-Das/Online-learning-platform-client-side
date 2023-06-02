import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import LeftSideNav from '../LeftSideNav/LeftSideNav'
import Details from '../Details/Details'

const AllCourses = () => {
  return (
    <Container className="mt-4">
    <Row>
      <Col lg="4" className="d-none d-lg-block">
        <LeftSideNav/>
      </Col>
      <Col lg="8">
      <Details/>
      </Col>
    </Row>
  </Container>
  )
}

export default AllCourses