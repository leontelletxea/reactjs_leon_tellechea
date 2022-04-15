import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget/CartWidget';

function NavBar(props) {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand " href="#">GameDrops <FontAwesomeIcon icon={faDiceD6}/></a>
            <CartWidget/>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">M E N U</h5>
                <button type="button" class="btn-close btn-close-white"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav align-items-start">
                <li class="nav-item">
                    <a class="nav-link" href="#">I N I C I O</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">J U E G O S</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                C A T E G O R I A S </a>
                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item" href="#">S H O O T E R</a></li>
                <li><a class="dropdown-item" href="#">A V E N T  U R A</a></li>
                <li><a class="dropdown-item" href="#">C A M P A Ñ A</a></li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item" href="#">T O D O S</a></li>
                </ul>
                </li>
                </ul>   
            </div>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;