import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";

const navbarlinks = { "Hello": "#hello", "Projects": "#projects", "Contact": "#contact" }
export const NavBar = () => {
    return (
        <Navbar expand="sm" id="navbarX">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="flex justify-content-end">
                    <Nav>
                        {Object.keys(navbarlinks).map(key => (
                            <Nav.Item key={key}>
                                <Nav.Link href={navbarlinks[key]}>
                                    {key}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}