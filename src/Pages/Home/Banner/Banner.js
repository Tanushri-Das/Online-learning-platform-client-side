import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Container fluid className="banner mb-5">
      {/* style={{marginLeft:'90px'}} */}
    <Row>
      <div className="col-lg-12 bg-text">
        <h2 className="text-white fw-bold text-center" style={{marginTop:'160px'}}>EDUCATION MAKES </h2>
        <h2 className="text-white fw-bold  text-center" style={{marginTop:'10px'}}>PROPER HUMANITY </h2>
        <p className="text-white fw-semibold text-center mt-3">
          I must explain to you how all this mistaken idea of denouncing
          pleasure and prsing pain <br /> was born and I will give you a complete
          account of the system{" "}
        </p>
        <div className="d-flex justify-content-center align-items-center">
        <a class="default-btn mt-4" href="about.html">
          Learn more
        </a>
        </div>
        
      </div>
    </Row>
  </Container>
  );
};

export default Banner;
