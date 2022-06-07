import {React, useContext} from 'react'
import Cart from '../Cart/Cart'
import CartContext from '../../store/cart-context';
import {Link} from 'react-router-dom'
import './CartContainer.css'


const CartContainer = () => {
    const cartCtx = useContext(CartContext);
    
    if(cartCtx.getCartQuantity() > 0){
      return (
      <div class="cartContainer">
        <div class="cartTotal alert alert-light" role="alert">
          <h1 class="display-4">Tu Carrito</h1>
          <h5 class="alert-heading">Total: ${cartCtx.totalPrice()}</h5>
          <hr/>
          <Link to={'/checkout'} style={{textDecoration: 'none'}}><button className="btn btn-outline-dark">Finalizar la compra</button></Link>
        </div>  

        <div class='cartItems'>
            {cartCtx.products.map((item) => <Cart key={item.id} item={item}/>)}
          </div>      
      </div>



      )  
    }else{
      return (
        <div class="cartContainer"> 
          <div class="cartTotal">
            <div class="alert alert-light" role="alert">
              <h1 class="display-4">Lo sentimos:</h1>
              <p>Usted no tiene items agregados al carrito</p>
              <hr/>
              <Link to={'/'} style={{textDecoration: 'none'}}><button className="btn btn-outline-dark">Ir al listado</button></Link>
            </div>
          </div>
        </div>
      )  
    }
  
}

export default CartContainer