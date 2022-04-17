import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavHeader from "../components/navigation/NavHeader"

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <NavHeader/>
      <Container fluid>
        <Row>
          <Col lg={1} id="margin-left"></Col>
          <Col lg={10}>
          </Col>
          <Col lg={1} id="margin-right"></Col>
        </Row>
      </Container>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
    </>
  );
}

export default Home;