import './ItemListConteiners.css'

const ItemListConteiners  = ({titulo, miNombre, subtitulo}) =>{
    console.log(subtitulo)
    return(
        <div className='conteiner'>
            <h1>{titulo}</h1>
            <p>{miNombre}</p>
        </div>
    )
}

export default ItemListConteiners;