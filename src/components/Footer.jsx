import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KasaBlackWhiteSLogo from '../ressources/img/black_white_logo.png';

function Footer() {
    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <img
                            src={KasaBlackWhiteSLogo}
                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Logo Kasa noir et blanc"
                    />
                </Col>
                <Col xs={12}>© 2020 Kasa. All rights reserved</Col>
            </Row>
        </Container>
    );
}

export default Footer;
