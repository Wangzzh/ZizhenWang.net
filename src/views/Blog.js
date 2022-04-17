import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import NavHeader from "../components/navigation/NavHeader"

const Blog = (props) => {
  return (
      <>
          <NavHeader />
          <Container fluid>
              <Row>
                  <Col lg={2} id="margin-left"></Col>
                  <Col lg={10}>
                      <br/>
                      <br/>
                      <ReactMarkdown children={props.markdown} />
                  </Col>
                  <Col lg={2} id="margin-right"></Col>
              </Row>
          </Container>
      </>
  );
}

export default Blog;