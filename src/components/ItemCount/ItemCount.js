import './ItemCount.css'
import { useState, useEffect } from "react"

const ItemCount = ({inicial, stock, onAdd}) =>{
    const [ contador, setContador ] = useState(parseInt(inicial));
    const suma = () =>{
        setContador( contador + 1 );
    }
    const resta = () =>{
        setContador (contador - 1);
    }
    useEffect(()=>{
        setContador(parseInt(inicial));
    },[inicial])
    return(
        <>
        <div className='contador'>
            <h3>Hamburguesa</h3>
            <button disabled={contador >= stock} onClick={suma}>+</button>
            <h4>{contador}</h4>
            <button disabled={contador <= 0} onClick={resta}>-</button>
            <div>
                <button disabled={contador <= 1} disabled ={contador> 10} onClick={()=>onAdd(contador)}>AGREGAR AL CARRITO</button>
            </div>
        </div>
        </>
    )
}

export default ItemCount