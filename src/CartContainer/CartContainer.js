import {React, useContext} from 'react'
import Cart from '../Cart/Cart'
import CartContext from '../store/cart-context';
import './CartContainer.css'
import {Link} from 'react-router-dom'

const CartContainer = () => {
    const cartCtx = useContext(CartContext);
    
    if(cartCtx.getCartQuantity() > 0){
      return (
        <div class='cartContainer'>
          <h3 class="cartTotal">Total: ${cartCtx.totalPrice()}</h3>
          <button className="btn btn-success">Finalizar la compra</button>
          <div class='cartItems'>
            {cartCtx.products.map((item) => <Cart key={item.id} item={item}/>)}
          </div>
        </div>
      )  
    }else{
      return (
        <div class='cartContainer'>
          <div class="cartTotal">
            <h1 class="cartTittle">Usted no tiene items agregados al carrito</h1>
            <Link to={'/'} style={{textDecoration: 'none'}}><button className="btn btn-dark">Ir al listado</button></Link>
          </div>
        </div>
      )  
    }
  
}

export default CartContainer