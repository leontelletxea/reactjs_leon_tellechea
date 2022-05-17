import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <NavLink class='navbar-brand' to={'/'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>GameDrops <FontAwesomeIcon icon={faDiceD6}/></NavLink>
            <NavLink class='navbar-brand' to={'/cart'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{textDecoration: 'none', position: "absolute", right: '80px',}}><CartWidget/></NavLink>
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
                    <NavLink class='nav-link' to={'/'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none'}}>I N I C I O</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class='nav-link' to={'/'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>J U E G O S</NavLink>
                </li>
                <li class="nav-item dropdown">
                <NavLink class='nav-link dropdown-toggle' id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={'/games'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>C A T E G O R I A S</NavLink>
                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                <li><NavLink to={'/category/accion'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>A C C I O N</NavLink></li>
                <li><NavLink to={'/category/aventura'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>A V E N T  U R A</NavLink></li>
                <li><NavLink to={'/category/deportes'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>D E P O R T E S</NavLink></li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>
                <li><NavLink to={'/'} className={(nav) => nav.isActive ? 'link-activo' : ''} style={{ textDecoration: 'none' }}>T O D O S</NavLink></li>
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