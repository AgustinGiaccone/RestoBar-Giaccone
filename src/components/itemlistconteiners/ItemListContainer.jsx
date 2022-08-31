import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount.js'

const onAdd = (cantidadComprada) =>{
    console.log(`compraste ${cantidadComprada} unidades`)
}

const ItemListConteiners  = ({titulo, miNombre, subtitulo}) =>{
    console.log(subtitulo)
    return(
        <div className='conteiner'>
            <h1>{titulo}</h1>
            <p>{miNombre}</p>
            <ItemCount inicial ={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListConteiners;