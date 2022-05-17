import React, { useContext } from 'react'
import CartContext from '../store/cart-context';

const Cart = ({item}) => {

    const cartCtx = useContext(CartContext);

    function onRemove() {
        cartCtx.removeProduct(item.id);
    }

    return (
        <div class="card">
        <div class="card-body">
          <div class="imgContainer">
          <img class="img" src={item?.image} alt={item.image}/>
          </div>
          <h1 class="card-title text-dark">{item?.title}</h1>
          <h5 class="card-title text-dark">Precio Unitario: ${item?.price}</h5>
          <hr/>
          <p>Cantidad: {item?.quantity}</p>
          <button onClick={onRemove} className="btn btn-danger" style={{position: "absolute", right: 0, top: 0}}>X</button>
        </div>
        </div>
    )
}

export default Cart