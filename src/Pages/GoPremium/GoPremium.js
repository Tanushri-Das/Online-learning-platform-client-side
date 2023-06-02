import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./GoPremium.css";
import DownloadPage from "../DawnloadPage/DawnloadPage";

const GoPremium = () => {
  const premiumPage = useLoaderData();
  console.log(premiumPage);
  return (
    <div>
      <div>
        <DownloadPage
          rootElementId="detailsToPDf"
          downloadFileName="checkPage"
        />
      </div>
      <div id="detailsToPDf">
        <Container className="">
          <Row>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <Card className="go-card my-4">
                <Image
                  src={premiumPage.image_url}
                  fluid
                  className="go-card-img mt-3 mx-3"
                ></Image>
                <Card.Body>
                  <Card.Title>{premiumPage.title}</Card.Title>
                  <Card.Text>
                    <p>{premiumPage.details}</p>
                    <p>{premiumPage.details}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3"></div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GoPremium;
