import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class NavHeader extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">Zizhen Wang</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/education">Education</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand></Navbar.Brand>
                        <Navbar.Brand href="https://github.com/Wangzzh/">
                            <img alt="" src="/GitHub-Mark-64px.png" width="40"></img>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Placeholder</Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavHeader;