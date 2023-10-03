
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
        
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/Home">INDIA TOUR & TRAVELS ✈️🌍</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home 🏠</Nav.Link>
            <Nav.Link href="/Registration">Register Here 🙋 🔗</Nav.Link>
            <Nav.Link href="/Login">Signin</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
            {/* <NavDropdown title="Search" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Search by Name</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Search By Price
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Search By Date
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;