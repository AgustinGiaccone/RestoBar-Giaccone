import './ItemCount.css'
import { useState } from "react"

const ItemCount = () =>{
    const [ contador, setContador ] = useState(0);
    const suma = () =>{
        setContador( contador + 1 );
    }
    const resta = () =>{
        setContador (contador - 1);
    }
    return(
        <>
        <div className='contador'>
            <h3>Hamburguesa</h3>
            <button onClick={suma}>+</button>
            <h4>{contador}</h4>
            <button onClick={resta}>-</button>
            <div>
            <button>AGREGAR AL CARRITO</button>
            </div>

        </div>
            {/* <div>Contador</div>
            <h2>{contador}</h2>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button>AGREGAR AL CARRITO</button> */}
        </>


    )
}

export default ItemCount