import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { FaQuoteRight, FaRegStarHalf, FaStar } from "react-icons/fa";
import last from "../../../Assests/Ellipse 2.png";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/Theme";

const Successful = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div className="my-5">
      <h4 className="text-center mb-2">Some successful students feedback</h4>
      <p className="text-center mb-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Container>
        <Row>
          <div className="col-lg-6">
            <Card className="pt-4">
              <div className="d-flex justify-content-between mx-3">
                <div>
                  <FaQuoteRight className="fs-4" />
                </div>
                <div>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                </div>
              </div>

              <Card.Body>
                <Card.Text className="text-justify" style={{ color: isDark ? "black" : "black" }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem.
                </Card.Text>
                <div className="d-flex mt-1">
                  <Image
                    style={{ height: "50px" }}
                    roundedCircle
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  ></Image>
                  <div className="ms-3">
                    <h5 className="mb-1" style={{ color: isDark ? "black" : "black" }}>Awlad Hossain</h5>
                    <p style={{ color: isDark ? "black" : "black" }}>Network Enginner</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6">
            <Card className="pt-4">
              <div className="d-flex justify-content-between mx-3">
                <div>
                  <FaQuoteRight className="fs-4" />
                </div>
                <div>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaRegStarHalf className="text-warning" />
                </div>
              </div>

              <Card.Body>
                <Card.Text className="text-justify" style={{ color: isDark ? "black" : "black" }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem.
                </Card.Text>
                <div className="d-flex mt-1">
                  <Image
                    style={{ height: "50px" }}
                    roundedCircle
                    src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
                  ></Image>
                  <div className="ms-3">
                    <h5 className="mb-1" style={{ color: isDark ? "black" : "black" }}>Alayana</h5>
                    <p style={{ color: isDark ? "black" : "black" }}>Software Enginner</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mt-4">
            <Card className="pt-4">
              <div className="d-flex justify-content-between mx-3">
                <div>
                  <FaQuoteRight className="fs-4" />
                </div>
                <div>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                </div>
              </div>

              <Card.Body>
                <Card.Text className="text-justify" style={{ color: isDark ? "black" : "black" }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem.
                </Card.Text>
                <div className="d-flex mt-1">
                  <Image
                    style={{ height: "50px" }}
                    roundedCircle
                    src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
                  ></Image>
                  <div className="ms-3">
                    <h5 className="mb-1" style={{ color: isDark ? "black" : "black" }}>Ovik Das</h5>
                    <p style={{ color: isDark ? "black" : "black" }}>App Developer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mt-4">
            <Card className="pt-4">
              <div className="d-flex justify-content-between mx-3">
                <div>
                  <FaQuoteRight className="fs-4" />
                </div>
                <div>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaRegStarHalf className="text-warning" />
                </div>
              </div>

              <Card.Body>
                <Card.Text className="text-justify" style={{ color: isDark ? "black" : "black" }}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem.
                </Card.Text>
                <div className="d-flex mt-1">
                  <Image
                    style={{ height: "50px" }}
                    roundedCircle
                    src={last}
                  ></Image>
                  <div className="ms-3">
                    <h5 className="mb-1" style={{ color: isDark ? "black" : "black" }}>Rajib Das</h5>
                    <p style={{ color: isDark ? "black" : "black" }}>Web Developer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Successful;
