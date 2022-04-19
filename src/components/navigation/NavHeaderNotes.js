import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class NavHeaderNotes extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <NavDropdown title="Graphics Foundations">
                                    <NavDropdown.Item href="/notes/soft/graphics/foundations/colorspace">Color Space</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Live2D">
                                    <NavDropdown.Item href="/notes/soft/live2d/rotatingglobe">Rotating Globe</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Misc">
                                    <NavDropdown.Item href="/blog">Markdown Cheatsheet</NavDropdown.Item>
                                </NavDropdown>
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

export default NavHeaderNotes;