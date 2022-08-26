import logo from '../img/logoRestobar.png';
import './NavBar.css';
import Cartwidget from '../CartWidget/Cartwidget.jsx';

const NavBar = () =>{
    const style = {}
    return(
        <div className='navbar-conteiner'>
            <div>
                <img width={'200px'} src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Nosotros</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </div>
            <div className='img-carrito'>
                <Cartwidget/>
            </div>
        </div>
    );
};

export default NavBar;