// Composants
import Card from 'react-bootstrap/Card';

function LogementCard(props) {
    return(
        <Card>
                <Card.Img variant="top" src={props.cover} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                </Card.Body>
        </Card>
    );
}

export default LogementCard;
