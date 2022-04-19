import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavHeader from "../components/navigation/NavHeader"

const Career = (props) => {

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
                            <h2>Employments</h2>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <Row>
                                <Col lg={3}>
                                    <img src="/career/amazon.jpg" alt="amazon" height="200px"></img>
                                </Col>
                                <Col lg={2}/>
                                <Col lg={5}>
                                    <h4>Software Development Engineer</h4>
                                    <p>Amazon, August 2020 - present</p>
                                    <br></br>
                                    <p>Develop data pipelines to extract and transform HR employee data using AWS Glue and EMR.</p>
                                    <p>Develop data security model on datasets to handle population access and attribute access.</p>
                                </Col>
                            </Row>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <Row>
                                <Col lg={3}>
                                    <img src="/career/amazon.jpg" alt="amazon" height="200px"></img>
                                </Col>
                                <Col lg={2}/>
                                <Col lg={5}>
                                    <h4>Software Development Intern</h4>
                                    <p>Amazon, May 2017 - July 2017</p>
                                    <br></br>
                                    <p>Develop website for scheduling data ETL jobs between S3 and Redshift clusters.</p>
                                </Col>
                            </Row>
                            <br></br>
                            <hr></hr>
                        </Container>
                        <br></br>
                        <br></br>
                        <Container>
                            <h2>Skill Sets</h2>
                            <br></br>
                            <ul>
                                <li>Programming Languages: Java, Python, Scala</li>
                                <li>AWS Services: S3, Redshift, DynamoDB, Lambda, Step Function, Glue</li>
                                <li>Big Data Tools: Apache Spark, AWS EMR</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col lg={2} id="margin-right"></Col>
                </Row>
            </Container>
        </>
    );
}

export default Career;