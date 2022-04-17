import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import githubLogo from './GitHub-Mark-64px.png';

class NavHeader extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand>Zizhen Wang</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link>Button1</Nav.Link>
                                <Nav.Link>Button2</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand></Navbar.Brand>
                        <Navbar.Brand href="https://github.com/Wangzzh/">
                            <img src={githubLogo} width="40"></img>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavHeader;