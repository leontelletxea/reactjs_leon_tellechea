import React from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item';

const ItemListContainer = () => {
  const itemList = [
    {
      id: 1,
      title: "Days Gone",
      description: "Esta es la descripcion de Days Gone.",
      image: "https://i.3djuegos.com/juegos/13416/days_gone_/fotos/ficha/days_gone_-5370492.jpg",
      price: 11200,
      stock: 5
    },
    {
      id: 2,
      title: "Fifa 22",
      description: "Esta es la descripcion de Fifa 22.",
      image: "https://img.g2a.com/323x433/1x1x0/fifa-22-pc-origin-key-europe/dce7598de0604b70ae47d576",
      price: 13900,
      stock: 3
    },
    {
      id: 3,
      title: "God Of War",
      description: "Esta es la descripcion de God Of War.",
      image: "https://s3.gaming-cdn.com/images/products/7325/orig-fallback-v1/god-of-war-pc-juego-steam-cover.jpg",
      price: 9500,
      stock: 2
    },
    {
      id: 4,
      title: "Gta V",
      description: "Esta es la descripcion de Gta V.",
      image: "https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg",
      price: 5000,
      stock: 7
    }
  ]

  return (
    <div class='box d-flex justify-content-center align-items-center text-white'>
      {itemList.map((item) => <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemListContainer
