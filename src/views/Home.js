import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavHeader from "../components/navigation/NavHeader"

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <NavHeader/>
      <Container fluid>
        <Row>
          <Col lg={2} id="margin-left"></Col>
          <Col lg={8}>
            <br></br>
            <br></br>
            <Container>
              <Row>
                <Col lg='4'>
                  <img src="/selfie.png" alt="selfie"></img>
                </Col>
                <Col lg='8'>
                <div class="d-flex justify-content-center align-items-center h-100">
                  <Container>
                    <p style={{fontSize: 36}}>Hello, this is Zizhen Wang's personal space.</p>
                    <br></br>
                    <p>I am currently working as a software engineer for Amazon since 2020. </p>
                    <p>I grew up in Shanghai and received undergradate education in Shanghai Jiao Tong University in electrical and computer science. During the time I joined a dual degree program with University of Michigan and got a bachelor's degree in computer science there. Later, I continued to pursue a master degree in computer science in Georgia Tech, and was since then working as software engineer for Amazon in Seattle.</p>
                  </Container>
                </div>
                </Col>
              </Row>
              <hr></hr>
            </Container>
          </Col>
          <Col lg={2} id="margin-right"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;