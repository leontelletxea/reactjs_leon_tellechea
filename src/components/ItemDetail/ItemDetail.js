import React, {useContext, useEffect, useState} from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../store/cart-context';

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
            <img src={item?.image} class="imgDetail img-fluid rounded-start" alt={item?.title}/>
        </div>
        <div class="col-md-8">
        <div class="detailContainer card-body">
            <h1 class="card-title">{item?.title}</h1>
            <p class="card-text">{item?.description}</p>
            <h5 class="card-title">Precio: AR${item?.price}</h5>
            <hr/>
            {
                !confirmar ? (
                        <ItemCount class="countConfirmar" stock={item.stock} initial={0} onAdd={addHandler} />
                ) : (                
                <Link to="/cart" style={{textDecoration: 'none'}}>
                    <button onClick={onConfirmar} className="btn btn-success" style={{marginTop: "5px"}}>Confirmar compra</button>
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

