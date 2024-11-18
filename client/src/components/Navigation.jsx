import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LuPhoneCall } from "react-icons/lu"

const Navigation = () => {

  return (
    <div className="d-flex justify-content-center">
      <Navbar collapseOnSelect fixed="top" expand="lg" className="bg-body-tertiary">
        <Container style={{ margin: "auto" }}>
          <Navbar.Brand href="/">LATTIATYÖ VASTAMÄKI</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
            className="w-auto"
            restoreFocus={false}
          >
            <Offcanvas.Header className="justify-content-end" closeButton />
            <Offcanvas.Body>
              <Nav className="navLinks">
                <Nav.Link as={Link} to="/" eventKey={1}>Etusivu</Nav.Link>
                <Nav.Link as={Link} to="/#palvelut" eventKey={2}>Palvelut</Nav.Link>
                <Nav.Link as={Link} to="/#kuvat"eventKey={3}>Kuvia</Nav.Link>
                <Nav.Link as={Link} to="/tarjouspyynto" eventKey={4}>Tarjouspyyntö</Nav.Link>
                <Nav.Link as={Link} to="/#yhteystiedot" eventKey={5}>Yhteystiedot</Nav.Link>
                <Nav.Link
                  href="tel:+358407218470"
                  style={{ fontWeight: "300" }}
                >
                  <LuPhoneCall style={{ color: "green" }} /> 040 7218470
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation