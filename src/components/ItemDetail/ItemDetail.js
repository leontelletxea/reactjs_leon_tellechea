import React, {useContext, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../store/cart-context';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  const cartCtx = useContext(CartContext);
  const [confirmar, setConfirmar] = useState(false);
  const [cantidad, setCantidad] = useState(0);

function addHandler(quantityToAdd) {
    setCantidad(quantityToAdd);
    setConfirmar(true);
    cartCtx.addProduct({quantity: quantityToAdd, ...item});
}

function onConfirmar() {

    cartCtx.addProduct({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        description: item.description,
        stock: item.stock,
        category: item.category,
        quantity: cantidad,
    });
}

  return (
    <div class="cardDetail card mb-3">
    <div class="row g-0">
        <div class="col-md-4">
        <img src={item?.image} class="imgDetail img-fluid rounded-start" alt={item?.image}/>
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="display-1">{item?.title}</h5>
            <p class="lead">{item?.description}</p>
            <p class="lead"><strong>Precio: ${item?.price}</strong></p>
            <p class="card-text"><small class="text-muted">Stock: {item.stock} Unidades</small></p> 
            <hr/>
            {
                !confirmar ? (
                        <ItemCount stock={item.stock} initial={0} onAdd={addHandler}/>
                ) : (                
                 <Link to="/cart" style={{textDecoration: 'none'}}>
                    <button onClick={onConfirmar} className="buttonAdd btn btn-outline-primary btn-lg" style={{marginTop: "1em"}}>Ir al carrito</button>
                 </Link>
                 )  
            }
        </div>
        </div>
    </div>
    </div>
  )
}

export default ItemDetail

