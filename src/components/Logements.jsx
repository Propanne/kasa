// Composants
import LogementCard from './LogementCard.jsx';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
// Ressources
import LogementsJSON from '../ressources/logements.json';

function Logements() {
    {console.log(LogementsJSON)}
    return LogementsJSON.map((e,i) => {
            return(<Col className="logementCard" sm={6} md={4}><Link to="/logement/{e.id}"><LogementCard key={i} cover={e.cover} title={e.title}/></Link></Col>);
        })
}

export default Logements;
