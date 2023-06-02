import React from "react";
import { useContext } from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { ThemeContext } from "../../../Context/Theme";

const Choose = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div className="my-5">
      <h4 className="text-center">Why Choose Us</h4>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        praesentium vitae cupiditate voluptatem eaque suscipit.
      </p>
      <Container>
        <Row>
          <div className="col-lg-4">
            <Card className="pt-4">
              <Card.Img
                variant="top"
                className="mx-auto w-25"
                src="https://w7.pngwing.com/pngs/11/946/png-transparent-quality-control-computer-icons-quality-assurance-quality-miscellaneous-service-logo-thumbnail.png"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ color: isDark ? "black" : "black" }}
                >
                  Best Quality
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="pt-4">
              <Card.Img
                variant="top"
                className="mx-auto w-25"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/24-7-services-3230455-2690928.png"
              />
              <Card.Body>
                <Card.Title className="text-center"
                  style={{ color: isDark ? "black" : "black" }}
                >
                  24/7 Support
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="pt-4">
              <Card.Img
                variant="top"
                className="mx-auto w-25"
                src="https://cdn0.iconfinder.com/data/icons/business-and-finance-4-11/100/line-98-512.png"
              />
              <Card.Body>
                <Card.Title
                 className="text-center"
                 style={{ color: isDark ? "black" : "black" }}
                >
                  Expert Team
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Choose;
