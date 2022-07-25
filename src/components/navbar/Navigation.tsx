import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../logo/Logo';

export default function Navigation() {
  return (
    <Navbar bg='light' variant='light' expand='md'>
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbar-nav' />

        <Navbar.Offcanvas
          id={`offcanvas-navbar`}
          aria-labelledby={`offcanvas-navbar`}
          placement='top'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvas-navbar`}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav className='me-auto'>
                <LinkContainer to={'/resume'}>
                  <Nav.Link>Resume</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/projects'}>
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/activities'}>
                  <Nav.Link>Activities</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/posts'}>
                  <Nav.Link>Posts</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to={'/contact'}>
                  <Nav.Link>Contact me</Nav.Link>
                </LinkContainer>
              </Nav>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
