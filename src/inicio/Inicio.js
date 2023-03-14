import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icono from '../imagenes/LOGO.png'

function Inicio() {
  return (
    <Navbar  expand="lg">
      <Container>

        <Navbar.Brand href="/"><img class="icono" src={icono}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/carta">
              <b>CARTA</b>
            </Nav.Link>
            <Nav.Link href="#link">
            <b>PROMOCIONES</b>
            </Nav.Link>
            <Nav.Link href="#link">
            <b>NOSOTROS</b>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Inicio