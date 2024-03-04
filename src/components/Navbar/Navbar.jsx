import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

const NavbarRelinars = () => {
    const [isSticky, setIsSticky]=useState(false);

    const handleScroll = () => {
      const isPastSlider=window.scrollY>100;

      setIsSticky(isPastSlider)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
      <Navbar 
        expand="lg"
        className={`navbar-relinars ${isSticky ? 'sticky' : ''}`}
        >
        <Container>
          <Navbar.Brand href="/">RELINARS.</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavbarRelinars; 