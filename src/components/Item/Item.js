import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import {Link, NavLink} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div class="card">
    <div class="card-body">
      <div class="imgContainer">
      <img class="img" src={item?.image} alt={item.image}/>
      </div>
      <h1 class="card-title text-dark">{item?.title}</h1>
      <h5 class="card-title text-dark">AR${item?.price}</h5>
      <hr/>
      <div class="count"><ItemCount stock={item?.stock} initial={0} onAdd={handlerAddToCart}/></div>
      <NavLink to={'/item/' + item?.id} className={(nav) => nav.isActive ? 'link-activo' : ''}>Detalle</NavLink>
    </div>
    </div>
  )
}

function handlerAddToCart(count){
  alert('Se agregaron los ' + count + " al carrito");
}

export default Item

