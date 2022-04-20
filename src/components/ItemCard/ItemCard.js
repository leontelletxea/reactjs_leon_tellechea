import { getActiveElement } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './ItemCard.css'

const ItemCard = (props) => {
  return (
    <div class="card d-flex">
    <div class="card-body">
      <h1 class="card-title text-dark">Card title</h1>
      <h5 class="card-title text-dark">Description</h5>
      <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="contador">{props.contador}</div>
    </div>
    </div>
  )
}

export default ItemCard