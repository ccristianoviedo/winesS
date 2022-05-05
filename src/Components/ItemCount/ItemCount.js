import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'

const ItemCount=({stock, initial})=>{
    const [counter, setCounter]= useState(initial);
    if (stock<1){
        return <h3>NO HAY STOCK</h3>
    }else if (stock>=1){
        const sumar=()=>{
            const newValue = counter+1;
            if(newValue <= stock){
                setCounter(newValue)
            }
        }    
        const subtract=()=>{
            const newValue = counter-1;
            if(newValue >= initial){
                setCounter(newValue)
            }
        }
        const onAdd=()=>{
            alert(`Agrego ${counter} articulos al carrito de compras.`)
        }        
        return(
            <>
                <div className='counters'>
                    <div className='counter'>
                        <button onClick={subtract} className="btn btn-secondary">RESTAR</button>
                        <button onClick={sumar} className="btn btn-secondary">COMPRAR</button>
                    </div>
                    <div  className='counter'>
                        <h3>{counter}</h3>
                        <button className="btn btn-secondary" onClick={onAdd}>AGREGAR A CARRITO</button>
                </div>
            </div>
            </>
        )
    } 
}   
export default ItemCount;