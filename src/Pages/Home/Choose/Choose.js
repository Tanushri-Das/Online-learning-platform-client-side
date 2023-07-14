import React from "react";

import { Card, Container, Image, Row } from "react-bootstrap";


const Choose = () => {

  return (
    <div className="mb-5">
      <h2 className="text-center mb-4 fw-bold">Why Choose Us</h2>
      <p className="text-center fw-medium mb-5" style={{fontSize:'18px'}}>
        At our learning platform, we offer exceptional features that set us apart. Choose us for:
      </p>
      <Container>
        <Row>
          <div className="col-lg-4">
            <Card className="pt-4 mb-3 shadow rounded-3">
              <Card.Img
                variant="top"
                className="mx-auto w-25"
                src="https://w7.pngwing.com/pngs/11/946/png-transparent-quality-control-computer-icons-quality-assurance-quality-miscellaneous-service-logo-thumbnail.png"
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                >
                  Best Quality
                </Card.Title>
                <Card.Text className="text-center">
                  Our courses are designed and delivered with the highest quality standards to ensure an enriching learning experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="pt-4 mb-3 shadow rounded-3">
              <Card.Img
                variant="top"
                className="mx-auto w-25"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/24-7-services-3230455-2690928.png"
              />
              <Card.Body>
                <Card.Title className="text-center"
                >
                  24/7 Support
                </Card.Title>
                <Card.Text className="text-center">
                  We offer round-the-clock support to assist you with any questions or issues you may have during your learning journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="pt-4 shadow rounded-3">
              <Card.Img
                variant="top"
                className="mx-auto w-25"
                src="https://cdn0.iconfinder.com/data/icons/business-and-finance-4-11/100/line-98-512.png"
              />
              <Card.Body>
                <Card.Title
                 className="text-center"
                >
                  Expert Team
                </Card.Title>
                <Card.Text className="text-center">
                  Our team consists of experienced and knowledgeable professionals who are dedicated to providing you with the best learning experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Choose;
