import CarritoImg from '../img/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div>
            <img src={CarritoImg} alt="carrito" />
        </div>
    )
}

export default CartWidget;