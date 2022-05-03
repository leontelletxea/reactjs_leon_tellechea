import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  return (
    <div class="cardDetail card mb-3">
    <div class="row g-0">
        <div class="imgDetailContainer col-md-4">
            <img src={item?.image} class="imgDetail img-fluid rounded-start" alt={item?.image}/>
        </div>
        <div class="col-md-8">
        <div class="detailContainer card-body">
            <h1 class="card-title">{item?.title}</h1>
            <p class="card-text">{item?.descripcion}</p>
            <h5 class="card-title">Precio: AR${item?.price}</h5>
            <hr/>
            <div class="countDetail"><ItemCount stock={item?.stock} initial={0} onAdd={handlerAddToCart}/></div>
        </div>
        </div>
    </div>
    </div>
  )
}

function handlerAddToCart(count){
  alert('Se agregaron los ' + count + " al carrito");
}

export default ItemDetail

