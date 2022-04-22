import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  function handlerSumar(){
    if((count + 1) >= 0 && (count + 1) <= stock)
    {
      setCount(count + 1)
    }
  }

  function handlerRestar(){
    if((count - 1) >= 0)
    {
      setCount(count - 1)
    }
  }

  return (
  <div>
    <div class="contador input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-primary" type="button" onClick={() => handlerRestar()}>-</button>
      </div>
      <input type="text" class="form-control text-center" placeholder={count} aria-label="" aria-describedby="basic-addon1" readOnly="true"/>
      <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" onClick={() => handlerSumar()}>+</button>
      </div>
    </div>
    <button type="button" class="btn btn-primary" onClick={() => count > 0 && onAdd(count)}>Agregar al carrito</button>
  </div>
  )
}

export default ItemCount