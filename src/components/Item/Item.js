import './Item.css'

const Item = ({id, nombre, descripcion, precio, imagen, cantidad}) => {
    return (
        <div className="tarjetas">
            <h1>{nombre}</h1>
            <h2>{descripcion}</h2>
            <p>{precio}</p>
            <img src={imagen} alt={nombre}/>
        </div>
    )
};

export default Item;