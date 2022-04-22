import { getActiveElement } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({item}) => {
  return (
    <div class="card d-flex">
    <div class="card-body">
      <img class="card-img-top" src={item.image}/>
      <h1 class="card-title text-dark">{item.title}</h1>
      <p class="card-text text-dark">{item.description}</p>
      <h5 class="card-title text-dark">${item.price}</h5>
      <div class="count"><ItemCount stock={item.stock} initial={0} onAdd={handlerAddToCart}/></div>
    </div>
    </div>
  )
}

function handlerAddToCart(count){
  alert('Se agregaron los ' + count + " al carrito");
}

export default Item