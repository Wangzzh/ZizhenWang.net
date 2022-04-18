import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavHeader from "../components/navigation/NavHeader"

const Education = (props) => {

    return (
        <>
            <NavHeader />
            <Container fluid>
                <Row>
                    <Col lg={2} id="margin-left"></Col>
                    <Col lg={8}>
                        <Container>
                            <br></br>
                            <Row className="justify-content-md-center">
                                <div style={{ backgroundImage: "url(/education/EducationGatech.png)", height: "600px", width: "1200px", padding: "0px" }}>
                                    <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: "600px", width: "400px" }}>
                                        <div className="d-flex align-items-center justify-content-md-center h-100">
                                            <Container>
                                                <Row>
                                                    <h2 style={{ color: "black", fontSize: 40 }}>Georgia Tech</h2>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <h3>Master's Degree</h3>
                                                    <h3>Computer Science</h3>
                                                    <br></br>
                                                    <p>2018 - 2020</p>
                                                    <br></br>
                                                    <p>GPA: 4.0/4.0</p>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <br></br>
                            <Row className="justify-content-md-center">
                                <div style={{ backgroundImage: "url(/education/EducationUmich.png)", height: "600px", width: "1200px", padding: "0px" }}>
                                    <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: "600px", width: "400px" }}>
                                        <div className="d-flex align-items-center justify-content-md-center h-100">
                                            <Container>
                                                <Row>
                                                    <h2 style={{ color: "black", fontSize: 40 }}>University of Michigan</h2>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <h3>Bachelor's Degree</h3>
                                                    <h3>Computer Science</h3>
                                                    <br></br>
                                                    <p>2016 - 2018</p>
                                                    <br></br>
                                                    <p>GPA: 4.0/4.0</p>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <br></br>
                            <Row className="justify-content-md-center">
                                <div style={{ backgroundImage: "url(/education/EducationSJTU.png)", height: "600px", width: "1200px", padding: "0px" }}>
                                    <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: "600px", width: "400px" }}>
                                        <div className="d-flex align-items-center justify-content-md-center h-100">
                                            <Container>
                                                <Row>
                                                    <h2 style={{ color: "black", fontSize: 40 }}>Shanghai Jiao Tong University</h2>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <h3>Bachelor's Degree</h3>
                                                    <h3>Electrical and Computer Engineering</h3>
                                                    <br></br>
                                                    <p>2014 - 2018</p>
                                                    <br></br>
                                                    <p>GPA: 3.9/4.0</p>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={2} id="margin-right"></Col>
                </Row>
            </Container>
        </>
    );
}

export default Education;