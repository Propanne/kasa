// Composants
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useRouteError } from "react-router-dom";
// Ressources
import "../ressources/css/error404.css";

export default function Error404() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div class="error-root-container">
      <Header/>
      <div>
        <div><p>404</p></div>
        <div><p>Oups! La page que vous demandez n'existe pas.</p></div>
      </div>
      <div><a href="/accueil">Retourner sur la page d’accueil</a></div>
      <Footer/>
    </div>
  );
}
