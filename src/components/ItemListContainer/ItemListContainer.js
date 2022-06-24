import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore' 
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
  const {id} = useParams();

  function obtainProds(category) {
    const dataBase = getFirestore();
    const itemCollection = collection(dataBase, 'items');
    const q = category && query(
      itemCollection,
      where('category', '==', category)
    );
    return getDocs(q || itemCollection);
  }  

  useEffect(() => {
    obtainProds(id)
      .then(response => {
        setJuegos(response.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        }));

      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <ItemList items={catalogo}/>
    </div>
  )
}

export default ItemListContainer
