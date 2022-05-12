import React from 'react';
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetails=({item})=>{
    return (
        <div className='item'>
            <div className='imgItem'>
                <img src={item.img} alt={item.name} className='imgUrl'/>
            </div>
            <div className='itemText'>     
                <p>BODEGA: {item.name}</p>
                <p>DESCRIPCION:  {item.description}</p>
                <p>COSECHA: {item.harvest}</p>
                <p>VARIEDAD: {item.variety}</p>
                <p>CRIANZA: {item.breeding}</p>
                <p>SUGERENCIA: {item.suggest}</p>
                <p>STOCK: {item.stock}</p>
                <ItemCount stock={item.stock} initial={1} />
            </div>   
        </div>
    ) 
}
export default ItemDetails;
