import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkImages from "remark-images";
import rehypeKatex from "rehype-katex";
import 'katex/dist/katex.min.css'

import NavHeader from "../components/navigation/NavHeader"

const Blog = (props) => {
  return (
      <>
          <NavHeader />
          <Container fluid>
              <Row>
                  <Col lg={2} id="margin-left"></Col>
                  <Col lg={8}>
                      <br/>
                      <br/>
                      <ReactMarkdown 
                        children={props.markdown} 
                        remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkImages]}
                        rehypePlugins={[rehypeKatex]}/>
                  </Col>
                  <Col lg={2} id="margin-right"></Col>
              </Row>
          </Container>
      </>
  );
}

export default Blog;