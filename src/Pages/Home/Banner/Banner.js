import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-4">
      <Container fluid className="banner">
        <Row style={{marginLeft:'90px'}}>
          <div className="col-lg-12 bg-text">
            <h2 className="text-white fw-bold" style={{marginTop:'160px'}}>EDUCATION MAKES </h2>
            <h2 className="text-white fw-bold" style={{marginTop:'10px'}}>PROPER HUMANITY </h2>
            <p className="text-white fw-semibold mt-4">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and prsing pain <br /> was born and I will give you a complete
              account of the system{" "}
            </p>
            <a class="default-btn" href="about.html">
              Learn more
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
