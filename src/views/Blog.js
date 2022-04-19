import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkImages from "remark-images";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css'

import NavHeader from "../components/navigation/NavHeader"

// Input arguments:
// props.markdown: Markdown text
// props.title: Title
// props.banner: Background image for title
const Blog = (props) => {

    const bannerPath = "url(" + props.banner + ")"

    return (
        <>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <div style={{ backgroundImage: bannerPath, height:"300px", width:"1200px"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <h1 style={{color: "white", fontSize: 40}}>{props.title}</h1>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col lg={3} id="margin-left"></Col>
                    <Col lg={6}>
                        <br></br>
                        <br></br>
                        <ReactMarkdown
                            children={props.markdown}
                            remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkImages]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]} />
                    </Col>
                    <Col lg={3} id="margin-right"></Col>
                </Row>
            </Container>
        </>
    );
}

export default Blog;