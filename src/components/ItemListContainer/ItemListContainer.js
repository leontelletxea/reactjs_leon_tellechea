import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div class='contenedor d-flex justify-content-center align-items-center text-white'>
      {props.card}
    </div>
  )
}

export default ItemListContainer
