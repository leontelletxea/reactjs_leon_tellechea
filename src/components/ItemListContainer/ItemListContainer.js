import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {

  return (
    <div class="box">
      <LoadProds/>
    </div>
  )
}

const LoadProds = () => {

  const [catalogo, setJuegos] = useState([]);

  function obtainProds() {
    const myPromise = new Promise((resolve) => {
       const listado = [
        {
          id: 1,
          title: "Days Gone",
          image: "https://as.com/meristation/imagenes/2020/11/03/game_cover/666031971604438123.jpg",
          price: 11200,
          descripcion: "Days Gone es un videojuego de terror y acción-aventura, desarrollado por el estudio SIE Bend Studio y publicado por Sony Interactive Entertainment para PlayStation 4 y Microsoft Windows. Fue lanzado en PlayStation 4 el 26 de abril del año 2019 y el 18 de mayo de 2021 para Microsoft Windows.",
          stock: 5
        },
        {
          id: 2,
          title: "God Of War",
          image: "https://s3.gaming-cdn.com/images/products/7325/orig-fallback-v1/god-of-war-pc-juego-steam-cover.jpg",
          price: 9500,
          descripcion: "God of War es una serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment.",
          stock: 2
        },
        {
          id: 3,
          title: "Gta V",
          image: "https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg",
          price: 5000,
          descripcion: "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​",
          stock: 7
        },
        {
          id: 4,
          title: "Fifa 22",
          image: "https://img.g2a.com/323x433/1x1x0/fifa-22-pc-origin-key-europe/dce7598de0604b70ae47d576",
          price: 13900,
          descripcion: "FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.",
          stock: 3
        }
      ]   
      setTimeout(() => {
        resolve(listado);
      }, 2000);
    });
    return myPromise;
  }  

  useEffect(() => {
    obtainProds()
      .then(response => setJuegos(response)); // Ejecuta la respuesta de la promise cuando se cumple la promesa
  }, [])

  return (
    <div>
      <ItemList items={catalogo}/>
    </div>
  )
}

export default ItemListContainer
