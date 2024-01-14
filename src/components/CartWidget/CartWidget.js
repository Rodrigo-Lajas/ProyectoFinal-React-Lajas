import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import {CartContext} from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget'>
            {/* <img className='CartImg' src={MdOutlineShoppingCart} alt='cart-widget'/> */}
            <p>Carrito</p>
            { cantidadEnCarrito() }    
        </Link>
    )
}

export default CartWidget;