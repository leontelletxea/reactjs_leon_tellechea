import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getFirestore, getDoc, doc} from 'firebase/firestore' 

function getItem(id){
    const dataBase = getFirestore();

    const itemRef = doc(dataBase, 'items', id);

    return getDoc(itemRef);
}

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [juegoElegido, setItem] = useState({})

    useEffect(() => {
        getItem(id)
        .then(response => {
            setItem({...response.data(), id : response.id});
        })
    })


    return (
        <div class="detail">       
            <ItemDetail item={juegoElegido} />            
        </div>
    )
}

export default ItemDetailContainer