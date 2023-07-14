import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import './Details.css';

const Details = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <Card>
        <Image src={courseDetails.image_url} rounded className="details-card mt-3 mx-3"></Image>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{courseDetails.title}</Card.Title>
          <Card.Text className="mt-2">
            <p>{courseDetails.details}</p>
            {courseDetails.details.length > 250 ? (
              <p>
                {courseDetails.details.slice(0, 200) + "..."}{" "}
                <Link className="text-decoration-none fw-semibold" to={`/coursedetails/${courseDetails._id}`}>Read More</Link>
              </p>
            ) : (
              <p>{courseDetails.details}</p>
            )}
          </Card.Text>
          <Link to={`/coursedetails/${courseDetails._id}`}>
            <Button className="fw-semibold" variant="outline-primary">Go Premium</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
