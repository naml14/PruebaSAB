import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to={"/"}
              className="link-light link-underline-opacity-0 link-underline-dark"
            >
              Inicio
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to={"/adduser"}
                  className="link-light link-underline-opacity-0 link-underline-dark"
                >
                  Agregar Usuario
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={"/userslist"}
                  className="link-light link-underline-opacity-0 link-underline-dark"
                >
                  Lista de Usuarios
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarComponent;
