import React from 'react'
import Item from '../Item/Item';

const ItemList = ({productos}) => {
    return (
      <div class='box d-flex justify-content-center align-items-center text-white'>
      {productos.map((item) => <Item key={item.id} item={item}/>)}
    </div>
    )
}

export default ItemList