import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../../Components/ItemCount/ItemCount';
import '../Item/Item.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Item=({products})=>{
    const navigate = useNavigate()
    return (
        <div className='itemPr'>
            <img src={products.img} alt={products.name} className='imgPr'/>        
            <p>BODEGA:{products.name}</p>
            <p>PRECIO: $ {products.price}</p>
            <p>STOCK: {products.stock}</p>
            <button onClick={()=> navigate(`/item/${products.id}`)} className="btn btn-info">Detalles</button>
            <ItemCount initial={1} stock={products.stock}/>
        </div>
    ) 
}
export default Item;