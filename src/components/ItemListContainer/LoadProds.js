import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import {productos} from './Productos';

const LoadProds = () => {
    const [juegos, setPrendas] = useState([]);
    
    function setProducts() {
      const myPromise = new Promise((resolve, reject) => {
        const productos = productos;
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
      return myPromise;
    }  
    
    useEffect(() => {
      setProducts()
        .then(prendaArray => setPrendas(prendaArray));
    }, [])
    
    return (
      <div>
        <ItemList productos={productos}/>
      </div>
    )
    }

export default LoadProds