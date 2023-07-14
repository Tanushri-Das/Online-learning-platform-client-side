import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import "./Team.css";
import { Link } from "react-router-dom";
import team1 from "../../../Assests/Rectangle 6 (1).png";
import team2 from "../../../Assests/Rectangle 6 (2).png";
import team3 from "../../../Assests/Rectangle 6 (3).png";
import team4 from "../../../Assests/Rectangle 6.png";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/Theme";

const Team = () => {
  return (
    <div className="container mb-5" id="team">
      <h2 className="text-center mb-4 fw-bold">Meet our Team</h2>
      <p className="text-center" style={{ fontSize: "18px" }}>
        We have a dedicated team of experts ready to guide you on your learning
        journey. Our team members are passionate about education and are
        committed to providing you with the best learning experience possible.
      </p>

      <Row className="mt-5">
        <div className="col-md-6 col-lg-3 mb-3">
          <Card className="p-2">
            <Card.Img
              variant="top"
              style={{ border: "1px solid gainsboro;" }}
              className="mx-auto rounded w-100"
              src={team1}
            />
            <Card.Body>
              <Card.Title className="text-center">Puja Deb</Card.Title>
              <Card.Text className="text-center">OOP Instructor</Card.Text>
              <Row>
                <div className="col-lg-12 text-center">
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaFacebookF className="me-2 fb text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaSkype className="me-2 sky text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaLinkedin className="me-2 linke text-white p-1 fs-3 rounded-circle" />
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaInstagram className="me-2 insta text-white p-1 fs-3 rounded-circle" />
                  </Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <Card className="p-2">
            <Card.Img
              variant="top"
              style={{ border: "1px solid gainsboro;" }}
              className="mx-auto rounded w-100"
              src={team2}
            />
            <Card.Body>
              <Card.Title className="text-center">Sujon Paul</Card.Title>
              <Card.Text className="text-center">
               Network Instructor
              </Card.Text>
              <Row>
                <div className="col-lg-12 text-center">
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaFacebookF className="me-2 fb text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaSkype className="me-2 sky text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaLinkedin className="me-2 linke text-white p-1 fs-3 rounded-circle" />
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaInstagram className="me-2 insta text-white p-1 fs-3 rounded-circle" />
                  </Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <Card className="p-2">
            <Card.Img
              variant="top"
              style={{ border: "1px solid gainsboro;" }}
              className="mx-auto rounded w-100"
              src={team3}
            />
            <Card.Body>
              <Card.Title className="text-center">Aditi Datta</Card.Title>
              <Card.Text className="text-center">
                OS Instructor
              </Card.Text>
              <Row>
                <div className="col-lg-12 text-center">
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaFacebookF className="me-2 fb text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaSkype className="me-2 sky text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaLinkedin className="me-2 linke text-white p-1 fs-3 rounded-circle" />
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaInstagram className="me-2 insta text-white p-1 fs-3 rounded-circle" />
                  </Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <Card className="p-2">
            <Card.Img
              variant="top"
              style={{ border: "1px solid gainsboro;" }}
              className="mx-auto rounded w-100"
              src={team4}
            />
            <Card.Body>
              <Card.Title className="text-center">Mahdi Rahman</Card.Title>
              <Card.Text className="text-center">
                Web Instructor
              </Card.Text>
              <Row>
                <div className="col-lg-12 text-center">
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaFacebookF className="me-2 fb text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaSkype className="me-2 sky text-white p-1 fs-3 rounded-circle" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaLinkedin className="me-2 linke text-white p-1 fs-3 rounded-circle" />
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                    target="_blank"
                  >
                    <FaInstagram className="me-2 insta text-white p-1 fs-3 rounded-circle" />
                  </Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default Team;
