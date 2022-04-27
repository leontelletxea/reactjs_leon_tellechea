import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({item}) => {
  return (
    <div class="card">
    <div class="card-body">
      <div class="imgContainer">
      <img class="img" src={item?.image} alt={item.image}/>
      </div>
      <h1 class="card-title text-dark">{item?.title}</h1>
      <h5 class="card-title text-dark">AR${item?.price}</h5>
      <div class="count"><ItemCount stock={item?.stock} initial={0} onAdd={handlerAddToCart}/></div>
    </div>
    </div>
  )
}

function handlerAddToCart(count){
  alert('Se agregaron los ' + count + " al carrito");
}

export default Item

