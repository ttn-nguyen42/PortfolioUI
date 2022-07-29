import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

import s from './Navigation.module.scss';
import './Navigation.scss';

export default function Navigation() {
  return (
    <Navbar bg='light' variant='light' expand='md'>
      <Container fluid className={s['container']}>
        <Navbar.Brand as={Link} to={'/'}>
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            <Nav className='me-auto'>
              <LinkContainer to={'/resume'}>
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/projects'}>
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/certificates'}>
                <Nav.Link>Certificates</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/activities'}>
                <Nav.Link>Activities</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/posts'}>
                <Nav.Link>Posts</Nav.Link>
              </LinkContainer>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
