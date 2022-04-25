import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({items}) => {
    return (
      <div class='box d-flex justify-content-center align-items-center text-white'>
      {items.map((item) => <Item key={item.id} item={item}/>)}
    </div>
    )
}

export default ItemList