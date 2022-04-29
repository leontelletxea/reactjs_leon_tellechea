import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

  return (
    <div>
      <LoadProdDetail/>
    </div>
  )
}

const LoadProdDetail = () => {

  const [detalle, setJuegos] = useState([]);

  function obtainProd() {
    const myPromise = new Promise((resolve) => {
      const listado = 
        {
          id: 1,
          title: "Days Gone",
          image: "https://as.com/meristation/imagenes/2020/11/03/game_cover/666031971604438123.jpg",
          price: 11200,
          descripcion: "Esta es la descripcion de Days Gone",
          stock: 5
        }
    
      setTimeout(() => {
        resolve(listado);
      }, 2000);
    });
    return myPromise;
  }  

  useEffect(() => {
      console.log(detalle);
    obtainProd()
      .then(response => setJuegos(response)); // Ejecuta la respuesta de la promise cuando se cumple la promesa
  }, [])

  return (
    <div>
      <ItemDetail item={detalle}/>
    </div>
  )
}

export default ItemDetailContainer