import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarRelinars = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">RELINARS.</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavbarRelinars; 