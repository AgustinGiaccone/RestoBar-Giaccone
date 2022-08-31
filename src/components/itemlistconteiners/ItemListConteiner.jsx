import './ItemListConteiners.css'
import ItemCount from '../ItemCount/ItemCount.js'

const ItemListConteiners  = ({titulo, miNombre, subtitulo}) =>{
    console.log(subtitulo)
    return(
        <div className='conteiner'>
            <h1>{titulo}</h1>
            <p>{miNombre}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemListConteiners;