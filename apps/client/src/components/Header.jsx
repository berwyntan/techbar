import Container from "react-bootstrap/Container"; // container from bootstrap for ui
import logo1 from "../images/logo-1.png";
import Nav from "react-bootstrap/Nav"; // for making nav inside the navbar
import Navbar from "react-bootstrap/Navbar"; // navbar for header from bootstrap
import { Link } from "react-router-dom"; // getting link to redirect on link

const Header = ({ user }) => {
  //rendering our ui
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container fluid>
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

          {/* if user is logged in then show myorders if not show login and signup link */}
          {user && user._id ? (
            <>
              <Nav.Link as={Link} to="/cart">
                <i className="fa fa-shopping-cart" style={{ fontSize: 22 }}></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/myorders">
                <i className="fa fa-user" style={{ fontSize: 22 }}></i>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link as={Link} to="/signin">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </Nav>
              <Nav.Link as={Link} to="/cart">
                <i className="fa fa-shopping-cart" style={{ fontSize: 22 }}></i>
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
