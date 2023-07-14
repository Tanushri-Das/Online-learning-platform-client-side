import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Details from "../Details/Details";

const AllCourses = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col lg="5" className="d-none d-lg-block">
          <LeftSideNav />
        </Col>
        <Col lg="7">
          <Details />
        </Col>
      </Row>
    </Container>
  );
};

export default AllCourses;
