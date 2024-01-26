// Composants
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Ressources
import "../ressources/css/error404.css";

export default function Error404() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div>
      <Header styleName="absolute-container absolute-container-top"/>
        <div className="error-message-container">
          <div>
            <p id="error-message-404" className="error-message">404</p>
            <p id="error-message-oups" className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <a id="error-message-link" href="/accueil" className="error-message">Retourner sur la page d’accueil</a>
          </div>
        </div>
      <Footer styleName="absolute-container absolute-container-bottom"/>
    </div>
  );
}
