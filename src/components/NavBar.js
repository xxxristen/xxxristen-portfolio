import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";
import { motion } from 'framer-motion';

const navbarlinks = { "Hello": "#hello", "Projects": "#projects", "Contact": "#contact" }
export const NavBar = () => {
const handleLinkClick = (linkKey, href) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        const eventName = "navbar_anchor_click";
        const category = "Navigation";
        const action = "Anchor Click";
        const label = `Navbar - ${linkKey} (${href})`;

      window.dataLayer.push({
            event: eventName,
            event_category: category,
            event_action: action,
            event_label: label,
            link_href: href,
            link_text: linkKey,
            is_anchor_link: true,
            current_page_path: window.location.pathname,
          });
        }
      };
    return (
        <motion.div initial="hidden" animate="show" viewport={{ once: true }} variants={{
            show: { opacity: 1, transition: { duration: 1 } },
            hidden: { opacity: 0 }
        }}>
        <Navbar expand="sm" id="navbarX" className='navbar-dark'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarNav"/>
                <Navbar.Collapse id="navbarNav" className="flex justify-content-end">
                    <Nav>
                        {Object.keys(navbarlinks).map(key => (
                            <Nav.Item key={key}>
                                <Nav.Link href={navbarlinks[key]} onClick={() => handleLinkClick(key, navbarlinks[key])}>
                                    {key}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </motion.div>
    )
}