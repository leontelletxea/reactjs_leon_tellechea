import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import {productos} from './Productos';

const LoadProds = () => {

  const [juegos, setJuegos] = useState([]);

  function traerProductos() {
    const myPromise = new Promise((resolve) => {
      const listado = productos;
      setTimeout(() => {
        resolve(listado);
      }, 2000);
    });
    return myPromise;
  }  

  useEffect(() => {
    traerProductos()
      .then(juegosArray => setJuegos(juegosArray));
  }, [])

  return (
    <div>
      <ItemList items={juegos}/>
    </div>
  )
}

export default LoadProds