import React, { useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as Sclink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Kglogo from "../Asset/Gllogo.png";
import "./Menubar.css";

function Menubar() {
  const navbarToggleRef = useRef(null);

  // Function to collapse the navbar
  const handleNavLinkClick = () => {
    if (navbarToggleRef.current) {
      navbarToggleRef.current.click(); // Trigger the toggle button click
    }
  };

  return (
    <Navbar className="bg-light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Sclink} to="/">
          <img src={Kglogo} alt='kgisl' className='imsize' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" ref={navbarToggleRef} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item className="ms-4">
              <ScrollLink
                to="hrbanner"
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link active"
                activeClass="active"
                onClick={handleNavLinkClick} // Collapse navbar on click
                href="#">Home</ScrollLink>
            </Nav.Item>
            <Nav.Item className="ms-4">
              <ScrollLink
                to="aboutpart"
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link active"
                activeClass="active"
                onClick={handleNavLinkClick} // Collapse navbar on click
                href="#">About Us</ScrollLink>
            </Nav.Item>
            <Nav.Item className="ms-4">
              <ScrollLink
                to="sectorspart"
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link active"
                activeClass="active"
                onClick={handleNavLinkClick} // Collapse navbar on click
                href="#">Sectors</ScrollLink>
            </Nav.Item>
            <Nav.Item className="ms-4">
              <ScrollLink
                to="clientus"
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link active"
                activeClass="active"
                onClick={handleNavLinkClick} // Collapse navbar on click
                href="#">Why Us</ScrollLink>
            </Nav.Item>
            <Nav.Item className="ms-4">
              <ScrollLink
                to="corevalue"
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link active"
                activeClass="active"
                onClick={handleNavLinkClick} // Collapse navbar on click
                href="#">Core Values</ScrollLink>
            </Nav.Item>
          </Nav>

          <Nav>
            <Nav.Item className="ms-4 contactmsg">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link active text-light"
                activeClass="active"
                onClick={handleNavLinkClick} // Collapse navbar on click
                href="#">Contact Us</ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
