import Item from '../Item/Item.js'

const ItemList = ({Listado}) =>{
    console.log(Listado);
    return (
        <>
        {Listado.map((producto) =>{
            return (
                <Item
                key={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                imagen={producto.imagen}
                />
            )
        })}
        </>
    )
};

export default ItemList;