import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import React, {useMemo} from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../../products';

const ItemDetailContainer = () => {
  const { id } = useParams()

  const juegoElegido = useMemo (() => {  
      const listado = products
      
      return listado.find((item) => {
          return item.id === id;
      })
  },[id]) 

  return (
      <div class="detail">       
          <ItemDetail item={juegoElegido} />            
      </div>
  )
}

export default ItemDetailContainer