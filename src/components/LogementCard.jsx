function LogementCard(props) {
    return(
        <div className="logementCard" style={{backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url("+props.cover+")"}}>
            <div className="logementCard-desc-container"><p className="logementCard-desc-text">{props.title}</p></div>
        </div>
    );
}

export default LogementCard;
