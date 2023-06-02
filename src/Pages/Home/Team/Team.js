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
import team1 from '../../../Assests/Rectangle 6 (1).png'
import team2 from '../../../Assests/Rectangle 6 (2).png'
import team3 from '../../../Assests/Rectangle 6 (3).png'
import team4 from '../../../Assests/Rectangle 6.png'
import { useContext } from "react";
import { ThemeContext } from "../../../Context/Theme";

const Team = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      <h4 className="text-center mb-3">Meet our Team</h4>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate
        id excepturi et tempora. Temporibus?
      </p>
      <Container className="mt-5">
        <Row>
          <div className="col-lg-3">
            <Card className="p-2">
              <Card.Img
                variant="top"
                style={{ border: "1px solid gainsboro;" }}
                className="mx-auto rounded w-100"
                src={team1}
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ color: isDark ? "black" : "black" }}>Puja Deb</Card.Title>
                <Card.Text className="text-center" style={{ color: isDark ? "black" : "black" }}>
                OOP Instructor
                </Card.Text>
                <Container>
                  <Row className="">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaFacebookF className="me-1 fb text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                      <FaSkype className="me-1 sky text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      ><FaLinkedin className="me-1 linke text-white p-1 fs-3 rounded-circle" /></Link>
                      
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaInstagram className="me-1 insta text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      
                    </div>
                    <div className="col-lg-2"></div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="p-2">
              <Card.Img
                variant="top"
                style={{ border: "1px solid gainsboro;" }}
                className="mx-auto rounded w-100"
                src={team2}
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ color: isDark ? "black" : "black" }}>Sujon Paul</Card.Title>
                <Card.Text className="text-center" style={{ color: isDark ? "black" : "black" }}>
                  Computer Network Instructor
                </Card.Text>
                <Container>
                  <Row className="">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaFacebookF className="me-1 fb text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                      <FaSkype className="me-1 sky text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      ><FaLinkedin className="me-1 linke text-white p-1 fs-3 rounded-circle" /></Link>
                      
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaInstagram className="me-1 insta text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      
                    </div>
                    <div className="col-lg-2"></div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="p-2">
              <Card.Img
                variant="top"
                style={{ border: "1px solid gainsboro;" }}
                className="mx-auto rounded w-100"
                src={team3}
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ color: isDark ? "black" : "black" }}>Aditi Datta</Card.Title>
                <Card.Text className="text-center" style={{ color: isDark ? "black" : "black" }}>
                Operating System Instructor
                </Card.Text>
                <Container>
                  <Row className="">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaFacebookF className="me-1 fb text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                      <FaSkype className="me-1 sky text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      ><FaLinkedin className="me-1 linke text-white p-1 fs-3 rounded-circle" /></Link>
                      
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaInstagram className="me-1 insta text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      
                    </div>
                    <div className="col-lg-2"></div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="p-2">
              <Card.Img
                variant="top"
                style={{ border: "1px solid gainsboro;" }}
                className="mx-auto rounded w-100"
                src={team4}
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ color: isDark ? "black" : "black" }}>Mahdi Rahman</Card.Title>
                <Card.Text className="text-center" style={{ color: isDark ? "black" : "black" }}>
                Discrete Mathematics Instructor
                </Card.Text>
                <Container>
                  <Row className="">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaFacebookF className="me-1 fb text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                      <FaSkype className="me-1 sky text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      ><FaLinkedin className="me-1 linke text-white p-1 fs-3 rounded-circle" /></Link>
                      
                      <Link
                        to="https://www.linkedin.com/in/tanushri-das-06a520194/"
                        target="_blank"
                      >
                        <FaInstagram className="me-1 insta text-white p-1 fs-3 rounded-circle" />
                      </Link>
                      
                    </div>
                    <div className="col-lg-2"></div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
