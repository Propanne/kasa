// Composants
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Ressources
import KasaBlackWhiteSLogo from '../ressources/img/black_white_logo.png';
import "../ressources/css/footer.css";

function Footer(props) {
    return(
        <footer className={props.styleName ? props.styleName : ""}>
            <Row>
                <Col xs={12}>
                    <img
                            id="footer-logo"
                            src={KasaBlackWhiteSLogo}
                            width="120"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Logo Kasa noir et blanc"
                    />
                </Col>
                <Col xs={12} id="footer-desc">© 2020 Kasa. All rights reserved</Col>
            </Row>
        </footer>
    );
}

export default Footer;
