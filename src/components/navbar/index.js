import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Kepo Corona
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link mx-2 text-dark">
              Beranda
            </Link>
            <Link to="/about" className="nav-link mx-2 text-dark">
              Tentang
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(Navigationbar);
