import Container from "react-bootstrap/Container"; // container from bootstrap for ui
import logo1 from "../images/logo1.png";
import Nav from "react-bootstrap/Nav"; // for making nav inside the navbar
import Navbar from "react-bootstrap/Navbar"; // navbar for header from bootstrap

const Header = ({}) => {
  //rendering our ui
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo1} style={{ height: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
