import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavHeader from "../components/navigation/NavHeader"

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <NavHeader />
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
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <Container >
                      <Row className="justify-content-md-center">
                        <p style={{ fontSize: 36 }}>Hello, this is Zizhen Wang's personal space.</p>
                        <br></br>
                        <p>I am currently working as a software engineer for Amazon since 2020. </p>
                        <p>I grew up in Shanghai and received undergradate education in Shanghai Jiao Tong University in electrical and computer science. During the time I joined a dual degree program with University of Michigan and got a bachelor's degree in computer science there. Later, I continued to pursue a master degree in computer science in Georgia Tech, and was since then working as software engineer for Amazon in Seattle.</p>
                      </Row>
                      <Row>
                        <p>Email: wangzzh96@gmail.com</p>
                      </Row>
                      <Row>
                        <Col lg='2'>
                          <img src="/GitHub-Mark-64px.png" alt="github" height="30px" href="https://github.com/Wangzzh/"></img>
                          &nbsp;<a href="https://github.com/Wangzzh/">Github</a>
                        </Col>
                        <Col lg='2'>
                          <img src="/LI-In-Bug.png" alt="github" height="30px" href="https://www.linkedin.com/in/zizhen-wang-285b51126/"></img>
                          &nbsp;<a href="https://www.linkedin.com/in/zizhen-wang-285b51126/">LinkedIn</a>
                        </Col>
                      </Row>
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