import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../ressources/css/kasa.css';
import { Outlet } from 'react-router-dom';


function Kasa() {
    return(
        <>
        <Header/>
        <Outlet/>

        <Footer/>
        </>
    );
}

export default Kasa;
