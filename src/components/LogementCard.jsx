function LogementCard(props) {
    return(
        <div className="logementCard" style={{backgroundImage: "url("+props.cover+")"}}>
            <div className="logementCard-desc-container"><p className="logementCard-desc-text">{props.title}</p></div>
        </div>
    );
}

export default LogementCard;
