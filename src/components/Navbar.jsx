import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarHead() {
  return (
    <Navbar expand="lg" className="bg-body-secondary ">
      <Container>
        <Navbar.Brand className="navbarBrand rounded " href="/">
          Hackflix Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-2">
            <ul className="rounded">
              <li>
                <Link to="/search">Search onChange</Link>
              </li>
              <li>
                <Link to="/searchClick">Search Click</Link>
              </li>
              <li>
                <Link to="/movie_pager">Movie Pager</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHead;
