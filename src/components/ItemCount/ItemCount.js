import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div className='container'>
            <div className="item-count">
                <Button variant='secondary' onClick={handleRestar}>-</Button>
                <p>{cantidad}</p>
                <Button variant='secondary' onClick={handleSumar}>+</Button>
            </div>
            <Button className="agregar-al-carrito" variant='primary' onClick={handleAgregar}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;