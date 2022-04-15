import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div class='contenedor d-flex justify-content-center align-items-center text-white'>
        <h1>{props.greetings}</h1>
    </div>
  )
}

export default ItemListContainer
