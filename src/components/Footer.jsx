import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className=" bg-light mt-auto">
    <Container className="py-5">
        <Row className="justify-content-between align-items-center">
          <Col md="auto">
            <div className="d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-bag-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 3.5A1.5 1.5 0 0 1 12 5v1h-1V5a.5.5 0 0 0-.5-.5H5A.5.5 0 0 0 4.5 5v1h-1V5A1.5 1.5 0 0 1 5 3.5h5.5zM4.5 6h7v7a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 4.5 13V6zm2.854 2.354a.5.5 0 0 0-.708-.708L5.5 8.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l1.5-1.5z" />
              </svg>
              <h5 className="m-0 fw-bold">ElectroShop</h5>
            </div>
          </Col>
          <Col md="auto">
            <Button variant="outline-secondary" size="sm" onClick={scrollToTop}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4.293l3.646 3.647-.708.707L8 5.707l-2.938 2.94-.708-.708L8 4.293z"
              />
            </svg>
            </Button>
          </Col>
        </Row>


        {/* Footer Main Section */}
        <Row className="align-items-end justify-content-between">
          <Col lg="4" className="text-center text-lg-start mb-4 mb-lg-0">
            <p className="text-muted mb-0 mt-2">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </Col>
          <Col lg="6">
            <Row className="text-center text-lg-end">
              <Col xs="12" lg="auto" className="mb-2 mb-lg-0">
                <a href="#" className="text-decoration-none text-dark me-3">
                  About
                </a>
              </Col>
              <Col xs="12" lg="auto" className="mb-2 mb-lg-0">
                <a href="#" className="text-decoration-none text-dark me-3">
                  Services
                </a>
              </Col>
              <Col xs="12" lg="auto">
                <a href="#" className="text-decoration-none text-dark">
                  Contact
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

