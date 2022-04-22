import { getActiveElement } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './Item.css'
import daysGone from './daysGone.jpg'

const Item = (props) => {
  return (
    <div class="card d-flex">
    <div class="card-body">
      <img src={daysGone} class="card-img-top" alt="..."/>
      <h1 class="card-title text-dark">Days Gone</h1>
      <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="contador">{props.contador}</div>
    </div>
    </div>
  )
}

export default Item