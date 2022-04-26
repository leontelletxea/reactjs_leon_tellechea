import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({items}) => {
    return (
      <div class='catalogo d-flex justify-content-center'>
      {items.map((item) => <Item key={item.id} item={item}/>)}
    </div>
    )
}

export default ItemList