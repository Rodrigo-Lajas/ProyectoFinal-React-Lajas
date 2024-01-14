import {CartContext} from '../Context/CartContext';
import React from "react";
import { useContext } from 'react'


const CartItem = ({ title, price, id, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className="text-white flex justify-around">
            <h2>{title}</h2>
            <p>Cantidad:{quantity}</p>
            <p>Subtotal:{price * quantity}</p>
            <button onClick={() => removeItem(id)}>
                Eliminar
            </button>
        </div>
    )
}

export default CartItem;