import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <a class="navbar-brand ms-auto" href="#"><FontAwesomeIcon icon={faCartShopping}/></a>
    );
}

export default CartWidget;