// Composants
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Ressources
import '../ressources/css/accueil.css';

function Accueil(){
    return(
        <Container id="accueil-global-container">
            {/* Banniere */}
            <Row id="accueil-img-container">
                <Col id="accueil-img">
                    <p id="accueil-img-desc">Chez vous, partout et ailleurs</p>
                </Col>
            </Row>

            {/* Logements */}

        </Container>
    );
}

export default Accueil;
