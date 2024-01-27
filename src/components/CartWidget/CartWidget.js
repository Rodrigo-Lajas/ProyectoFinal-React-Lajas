// import React from "react";
// import { useContext } from 'react';
// import {CartContext} from '../Context/CartContext';
// import { Link } from 'react-router-dom';

// const CartWidget = () => {
//     const { cantidadEnCarrito } = useContext(CartContext)

//     return (
//         <Link to='/cart' className='CartWidget'>
//             <p>Carrito</p> { cantidadEnCarrito() }    
//         </Link>
//     )
// }

// export default CartWidget;

import React, { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <Link to='/cart' className="nav-link">
            <MdOutlineShoppingCart /> {cantidadEnCarrito()}
        </Link>
    )
}

export default CartWidget;