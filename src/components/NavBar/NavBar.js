import logo from '../../logo.svg';
import './NavBar.css'

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
            <div>
                <button className='button-login'>Login</button>
            </div>
        </div>
    );
};



export default NavBar;