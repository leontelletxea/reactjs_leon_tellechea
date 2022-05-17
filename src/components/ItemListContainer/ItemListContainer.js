import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import {products} from '../../products';

const ItemListContainer = () => {

  return (
    <div class="box">
      <LoadProds/>
    </div>
  )
}

const LoadProds = () => {

  const [catalogo, setJuegos] = useState([]);
  const {id} = useParams()

  function obtainProds(id) {
    const myPromise = new Promise((resolve) => {
       const listado = products
      const productsFiltered = id  ? listado.filter(p => p.category === id) : listado;
      setTimeout(() => {
        resolve(productsFiltered);
      }, 500);
    });
    return myPromise;
  }  

  useEffect(() => {
    obtainProds(id)
      .then(response => setJuegos(response)); // Ejecuta la respuesta de la promise cuando se cumple la promesa
  }, [id])

  return (
    <div>
      <ItemList items={catalogo}/>
    </div>
  )
}

export default ItemListContainer
