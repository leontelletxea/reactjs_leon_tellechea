import {React, useContext, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context';
import {Link} from 'react-router-dom'


function CartWidget() {
    const cartCtx = useContext(CartContext);

    if(cartCtx.getCartQuantity() > 0){
        return (
            <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faCartShopping}/> {cartCtx.getCartQuantity() > 0 && <span className="units">{cartCtx.getCartQuantity()}</span>}   
            </Link>
        );      
    }
}

export default CartWidget;