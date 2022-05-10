import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div class="card">
    <div class="card-body">
      <div class="imgContainer">
      <img class="img" src={item?.image} alt={item.image}/>
      </div>
      <h1 class="card-title text-dark">{item?.title}</h1>
      <h5 class="card-title text-dark">AR${item?.price}</h5>
      <hr/>
      <Link to={'/item/' + item?.id} style={{ textDecoration: 'none'}}>
        <button className="btn btn-success" style={{ marginTop: "5px"}}>Detalle del producto</button>
      </Link>
    </div>
    </div>
  )
}

export default Item

