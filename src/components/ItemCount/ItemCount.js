import React from 'react'

const ItemCount = () => {
  return (
  <div class="input-group mb-3">
    <button class="btn btn-outline-primary" type="button" id="button-addon2">-</button>
    <input type="text" class="form-control text-center" placeholder="0" aria-describedby="button-addon2" readOnly="true"/>
    <button class="btn btn-outline-primary" type="button" id="button-addon2">+</button>
  </div>
  )
}

export default ItemCount