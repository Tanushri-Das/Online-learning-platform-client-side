import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Row>
        {courses?.map((course) => (
          <Col md={6} key={course.id} className="mb-3">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={course.image_url}
                style={{ height: "260px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{course.title}</Card.Title>
                <Card.Text className="mt-2">{course.details.slice(0, 280) + "..."}</Card.Text>
                <Link to={`/courses/${course.id}`} style={{ marginTop: "auto" }}>
                  <Button
                    variant="outline-success fw-semibold"
                    className="w-full"
                  >
                    Go Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RightSideNav;
