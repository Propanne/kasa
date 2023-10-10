import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import KasaLogo from '../ressources/img/logo.png'
import '../ressources/css/header.css';

function Header() {
    return(
        <Navbar className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={KasaLogo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo Kasa"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav >
                        <Nav.Link className="nav-title" href="/accueil">Accueil</Nav.Link>
                        <Nav.Link className="nav-title" href="/a-propos">A propos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
