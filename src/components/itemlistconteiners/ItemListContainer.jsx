import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount.js';
import data from './mock-data';
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList.js'

const onAdd = (cantidadComprada) =>{
    console.log(`compraste ${cantidadComprada} unidades`)
}

const ItemListConteiners  = ({titulo, miNombre, subtitulo}) =>{
    console.log(subtitulo)
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(data)
        }, 2000);
    })
        useEffect(() =>{
            getData.then((result)=>{
                setItems(result);
                console.log(result);
            })
        }, []);
    return(
        <div className='conteiner'>
            <h1>{titulo}</h1>
            <p>{miNombre}</p>
            <ItemCount inicial ={1} stock={10} onAdd={onAdd}/>
            {
                items.length > 0 ?(
            <ItemList Listado = {items}/>
                ) :(
                    <div>Cargando....</div>
                )
            }
        </div>
    )
}

export default ItemListConteiners;